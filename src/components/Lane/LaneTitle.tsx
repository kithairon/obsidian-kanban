import React from "react";
import { t } from "src/lang/helpers";
import { c, useIMEInputProps } from "../helpers";

export interface LaneTitleProps {
  itemCount: number;
  title: string;
  isEditing: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export function LaneTitle({
  itemCount,
  isEditing,
  title,
  onChange,
  onKeyDown,
}: LaneTitleProps) {
  const { getShouldIMEBlockAction, ...inputProps } = useIMEInputProps();
  const inputRef = React.useRef<HTMLTextAreaElement>();

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      const input = inputRef.current;

      inputRef.current.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    }
  }, [isEditing]);

  return (
    <div className={c("lane-title")}>
      {isEditing ? (
        <div data-replicated-value={title} className={c("grow-wrap")}>
          <textarea
            ref={inputRef}
            rows={1}
            value={title}
            className={c("lane-input")}
            placeholder={t("Enter list title...")}
            onChange={onChange}
            onKeyDown={(e) => {
              if (getShouldIMEBlockAction()) return;
              onKeyDown(e);
            }}
            {...inputProps}
          />
        </div>
      ) : (
        <>
          <span className={c("lane-title-text")}>{title}</span>
          <span className={c("lane-title-count")}>{itemCount}</span>
        </>
      )}
    </div>
  );
}
