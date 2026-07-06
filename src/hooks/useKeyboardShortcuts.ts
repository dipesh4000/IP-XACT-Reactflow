import { useEffect, useRef } from "react";

export interface KeyboardShortcutHandlers {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFitView?: () => void;
  onFind?: () => void;
  onOpenFile?: () => void;
  onExport?: () => void;
  onExportSelection?: () => void;
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

function isModifierPressed(event: KeyboardEvent): boolean {
  return event.ctrlKey || event.metaKey;
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers, enabled = true): void {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) {
        return;
      }

      const current = handlersRef.current;
      const mod = isModifierPressed(event);

      if (mod && (event.key === "+" || event.key === "=")) {
        event.preventDefault();
        current.onZoomIn?.();
        return;
      }

      if (mod && event.key === "-") {
        event.preventDefault();
        current.onZoomOut?.();
        return;
      }

      if (mod && event.key.toLowerCase() === "f") {
        event.preventDefault();
        current.onFind?.();
        return;
      }

      if (!mod && !event.shiftKey && !event.altKey && event.key.toLowerCase() === "f") {
        event.preventDefault();
        current.onFitView?.();
        return;
      }

      if (mod && event.key === "0") {
        event.preventDefault();
        current.onFitView?.();
        return;
      }

      if (mod && event.key.toLowerCase() === "o") {
        event.preventDefault();
        current.onOpenFile?.();
        return;
      }

      if (mod && event.shiftKey && event.key.toLowerCase() === "e") {
        event.preventDefault();
        current.onExportSelection?.();
        return;
      }

      if (mod && !event.shiftKey && event.key.toLowerCase() === "e") {
        event.preventDefault();
        current.onExport?.();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
}
