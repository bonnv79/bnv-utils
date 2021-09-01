import React from 'react';
import clsx from 'clsx';
import styles from './Form.module.css';

export const CodeBlock = ({ children, spellCheck = false, ...props }) => {
  return (
    <pre spellCheck={spellCheck} className={styles.codeBlock} {...props}>
      {children}
    </pre>
  )
}

export const Container = ({ style, children, inline }) => {
  const className = { [styles.containerInline]: inline };
  return (
    <div style={style} className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};

export const FormLabel = ({ style, label, children, inline, codeBlock }) => {
  const className = { [styles.formInline]: inline };
  return (
    <div className={clsx(styles.form, className)} style={style}>
      <div className={styles.label}>
        {codeBlock ? <CodeBlock>{label}</CodeBlock> : label}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export const Title = ({ className, children, ...props }) => {
  return (
    <div className={clsx(styles.title, className)} {...props}>{children}</div>
  );
};