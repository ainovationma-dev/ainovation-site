/* @ds-bundle: {"format":3,"namespace":"AiNovationDesignSystem_b45afd","components":[{"name":"ProcessStep","sourcePath":"components/blocks/ProcessStep.jsx"},{"name":"Stat","sourcePath":"components/blocks/Stat.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"}],"sourceHashes":{"components/blocks/ProcessStep.jsx":"5d24a4b53aba","components/blocks/Stat.jsx":"fd137b5bc457","components/core/Accordion.jsx":"f269070f7c7e","components/core/Badge.jsx":"5a1ee1e5d004","components/core/Button.jsx":"b0c9b78ae787","components/core/Card.jsx":"0e450d26aeb4","components/core/Input.jsx":"bd3e128c4a2c","components/core/Logo.jsx":"4cd4db35a447","ui_kits/website/app.jsx":"34c0d53cc581"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AiNovationDesignSystem_b45afd = window.AiNovationDesignSystem_b45afd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * One node in the AiNovation process line:
 * Диагностика → Карта сценариев → Пилот → Обучение → Масштабирование.
 * Numbered node + short title + one-line result. Set `active` to highlight.
 */
function ProcessStep({
  index = 1,
  title,
  result,
  active = false,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      fontWeight: 'var(--fw-semibold)',
      color: active ? 'var(--text-on-accent)' : 'var(--text-primary)',
      background: active ? 'var(--cyan)' : 'var(--surface-raised)',
      border: '1px solid ' + (active ? 'transparent' : 'var(--border-hairline)'),
      boxShadow: active ? 'var(--glow-cyan-sm)' : 'none',
      zIndex: 1
    }
  }, String(index).padStart(2, '0')), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      marginLeft: -2,
      background: active ? 'linear-gradient(90deg, var(--cyan), rgba(73,214,255,0.15))' : 'var(--border-default)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, title), result ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, result) : null));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Proof / metric figure. Large gradient number + label. For «результат» blocks.
 */
function Stat({
  value,
  label,
  accent = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      ...(accent ? {
        background: 'var(--grad-aurora)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      } : {
        color: 'var(--text-primary)'
      })
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Objection-handling accordion (B2B FAQ). Items: { q, a }. Single-open.
 * Calm height/opacity reveal — no bounce.
 */
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid ' + (isOpen ? 'var(--border-active)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ainv-acc__trigger",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 'var(--fw-semibold)',
        color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--violet)',
        fontSize: 20,
        lineHeight: 1,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 24px 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status / category chip. Used for process states: «AI-сценарий», «Пилот»,
 * «Карта процессов», «Команда обучена». A live dot signals an active process.
 */
function Badge({
  tone = 'violet',
  // violet | cyan | mint | neutral | outline
  dot = false,
  size = 'md',
  // sm | md
  children,
  style,
  ...rest
}) {
  const tones = {
    violet: {
      color: '#CBB6FF',
      bg: 'rgba(139,92,246,0.14)',
      bd: 'rgba(139,92,246,0.35)',
      dot: 'var(--violet)'
    },
    cyan: {
      color: '#B4ECFF',
      bg: 'rgba(73,214,255,0.12)',
      bd: 'rgba(73,214,255,0.32)',
      dot: 'var(--cyan)'
    },
    mint: {
      color: '#A8F4D2',
      bg: 'rgba(71,235,165,0.12)',
      bd: 'rgba(71,235,165,0.30)',
      dot: 'var(--mint)'
    },
    neutral: {
      color: 'var(--text-secondary)',
      bg: 'var(--surface-subtle)',
      bd: 'var(--border-default)',
      dot: 'var(--mist)'
    },
    outline: {
      color: 'var(--text-secondary)',
      bg: 'transparent',
      bd: 'var(--border-default)',
      dot: 'var(--mist)'
    }
  };
  const t = tones[tone] || tones.violet;
  const dims = size === 'sm' ? {
    fontSize: 11,
    padding: '3px 9px',
    gap: 6,
    dot: 5
  } : {
    fontSize: 12.5,
    padding: '5px 12px',
    gap: 7,
    dot: 6
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dims.gap,
      fontFamily: 'var(--font-ui)',
      fontSize: dims.fontSize,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      lineHeight: 1,
      color: t.color,
      background: t.bg,
      border: '1px solid ' + t.bd,
      padding: dims.padding,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.dot,
      height: dims.dot,
      borderRadius: '50%',
      background: t.dot,
      boxShadow: '0 0 8px ' + t.dot,
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AiNovation primary action. Gradient = главный CTA; outline = вторичный;
 * ghost/link = третичный. Calm motion, controlled glow.
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 40,
      padding: '0 18px',
      fontSize: 14,
      radius: 12,
      gap: 8
    },
    md: {
      height: 52,
      padding: '0 26px',
      fontSize: 16,
      radius: 14,
      gap: 10
    },
    lg: {
      height: 58,
      padding: '0 34px',
      fontSize: 17,
      radius: 16,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: s.radius,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--violet)',
      color: '#FFFFFF',
      boxShadow: 'var(--glow-accent-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-accent)',
      height: 'auto',
      padding: 0,
      borderRadius: 0
    }
  };
  const cls = 'ainv-btn ainv-btn--' + variant;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: cls,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AiNovation surface. Nebula fill, soft border, large radius, faint inner glow.
 * `glow` adds the signature violet aura; `interactive` enables hover lift.
 */
function Card({
  variant = 'default',
  // default | glass | outline
  glow = false,
  interactive = false,
  padding = 'var(--pad-card)',
  children,
  style,
  className = '',
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)'
    },
    glass: {
      background: 'rgba(22, 22, 41, 0.55)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    }
  };
  const base = {
    position: 'relative',
    borderRadius: 'var(--radius-lg)',
    padding,
    color: 'var(--text-secondary)',
    boxShadow: glow ? 'var(--glow-accent-sm), var(--glow-inset)' : 'var(--glow-inset)',
    overflow: 'hidden'
  };
  const cls = ['ainv-card', interactive ? 'ainv-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      ...base,
      ...(variants[variant] || variants.default),
      ...style
    }
  }, rest), glow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -60,
      right: -40,
      width: 200,
      height: 200,
      background: 'var(--glow-violet)',
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Form field with label + optional hint. Part of the «мини-диагностика» form.
 * Renders <input> or <textarea> (multiline). Dark nebula fill, violet focus ring.
 */
function Input({
  label,
  hint,
  multiline = false,
  rows = 4,
  id,
  required = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? 'f-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const fieldStyle = {
    width: '100%',
    fontFamily: 'var(--font-ui)',
    fontSize: 16,
    color: 'var(--text-primary)',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    padding: multiline ? '14px 16px' : '0 16px',
    height: multiline ? 'auto' : 52,
    minHeight: multiline ? 120 : undefined,
    lineHeight: 1.5,
    resize: multiline ? 'vertical' : undefined,
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)',
      letterSpacing: '0.01em'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--violet)'
    }
  }, " *") : null) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "ainv-field",
    rows: rows,
    style: fieldStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "ainv-field",
    style: fieldStyle
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AiNovation wordmark. Lowercase «ainovation» lettering + tracked tagline,
 * mark = three connected AI-nodes (диагностика → пилот → масштаб).
 * NOTE: exact logo typeface unknown; rendered in the brand font (Manrope light).
 */
function Logo({
  size = 'md',
  // sm | md | lg
  showMark = true,
  showTagline = true,
  tagline = 'NEXT-LEVEL BUSINESS',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      word: 20,
      mark: 18,
      tag: 7
    },
    md: {
      word: 28,
      mark: 24,
      tag: 9
    },
    lg: {
      word: 40,
      mark: 34,
      tag: 11
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.mark * 0.45,
      ...style
    }
  }, rest), showMark ? /*#__PURE__*/React.createElement("svg", {
    width: s.mark,
    height: s.mark,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "aiNodeGrad",
    x1: "2",
    y1: "4",
    x2: "30",
    y2: "28",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#8B5CF6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.6",
    stopColor: "#49D6FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#D6DEFF"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M7 24 L16 6 L25 24",
    stroke: "url(#aiNodeGrad)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "24",
    r: "3",
    fill: "#8B5CF6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "6",
    r: "3",
    fill: "#49D6FF"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "25",
    cy: "24",
    r: "3",
    fill: "#D6DEFF"
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: s.word,
      letterSpacing: '0.01em',
      color: 'var(--text-primary)'
    }
  }, "ai", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "novation")), showTagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: s.tag,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--text-muted)',
      marginTop: s.word * 0.18,
      alignSelf: 'flex-end'
    }
  }, tagline) : null));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* AiNovation — website UI kit. Composes the design-system primitives into the
   B2B landing the brief specifies (hero → услуги → процесс → кейсы → дашборд →
   результат → FAQ → диагностика → footer). Icons: Lucide (CDN). */
const DS = window.AiNovationDesignSystem_b45afd;
const {
  Button,
  Card,
  Badge,
  Input,
  Accordion,
  Logo,
  ProcessStep,
  Stat
} = DS;
const {
  useState,
  useEffect,
  useRef
} = React;

/* ---- Lucide icon helper ---- */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
const SECTION = {
  maxWidth: 1240,
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};
const EYEBROW = {
  fontFamily: 'var(--font-ui)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--violet)'
};

/* ================= HEADER ================= */
function Header({
  onCta
}) {
  const nav = ['Услуги', 'Процесс', 'Кейсы', 'Вопросы'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(8,7,11,0.72)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      marginLeft: 20
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "\u0418\u0418-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430"))));
}

/* ================= HERO + AI ARCHITECTURE ================= */
function HeroVisual() {
  const modules = [{
    label: 'Продажи',
    x: 4,
    y: 6
  }, {
    label: 'КП',
    x: 70,
    y: 0
  }, {
    label: 'CRM',
    x: 0,
    y: 44
  }, {
    label: 'База знаний',
    x: 74,
    y: 40
  }, {
    label: 'Контроль качества',
    x: 6,
    y: 82
  }, {
    label: 'Обучение',
    x: 72,
    y: 82
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: '10% 15%',
      background: 'var(--glow-violet)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, modules.map((m, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "50",
    y1: "50",
    x2: m.x + 8,
    y2: m.y + 6,
    stroke: "rgba(73,214,255,0.28)",
    strokeWidth: "0.3",
    strokeDasharray: "0.6 1.4"
  }))), modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: m.x + '%',
      top: m.y + '%',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--cyan)'
    }
  }), m.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 156,
      height: 156,
      borderRadius: 28,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-active)',
      boxShadow: 'var(--glow-accent)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: 'var(--grad-aurora)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brain-circuit",
    size: 26,
    color: "#0B0A12"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, "AI Core"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "AiNovation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-4%',
      top: '28%',
      background: 'rgba(22,22,41,0.85)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 14,
      padding: '10px 14px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "violet",
    size: "sm"
  }, "\u041A\u0430\u0440\u0442\u0430 \u0418\u0418-\u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, "\u0433\u043E\u0442\u043E\u0432\u0430 \xB7 14 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-3%',
      bottom: '14%',
      background: 'rgba(22,22,41,0.85)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 14,
      padding: '10px 14px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mint",
    size: "sm",
    dot: true
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0430")));
}
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-section)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 56,
      alignItems: 'center',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.05,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-primary)',
      margin: '20px 0 0'
    }
  }, "\u0412\u043D\u0435\u0434\u0440\u044F\u0435\u043C \u0418\u0418 \u0442\u0443\u0434\u0430,", /*#__PURE__*/React.createElement("br", null), "\u0433\u0434\u0435 \u043E\u043D \u0434\u0430\u0451\u0442", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--grad-aurora)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "\u0431\u0438\u0437\u043D\u0435\u0441-\u044D\u0444\u0444\u0435\u043A\u0442")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C B2B-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u0443\u044E \u0437\u043E\u043D\u0443 \u0434\u043B\u044F \u0418\u0418 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0438\u043B\u043E\u0442 \u2014 \u0431\u0435\u0437 \u0445\u0430\u043E\u0441\u0430 \u0438 \u043B\u0438\u0448\u043D\u0438\u0445 \u0437\u0430\u0442\u0440\u0430\u0442."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0418\u0418-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0438\u043B\u043E\u0442"))), /*#__PURE__*/React.createElement(HeroVisual, null)));
}

/* ================= SERVICES ================= */
function Services() {
  const items = [{
    icon: 'scan-search',
    tag: 'Шаг 1',
    title: 'Диагностика',
    text: 'Строим карту процессов и находим зоны, где ИИ даёт измеримый эффект.'
  }, {
    icon: 'rocket',
    tag: 'Шаг 2',
    title: 'Пилот',
    title2: true,
    text: 'Запускаем ИИ на одном приоритетном процессе и доводим до результата.'
  }, {
    icon: 'life-buoy',
    tag: 'Шаг 3',
    title: 'Сопровождение',
    text: 'Обучаем команду, масштабируем решение и поддерживаем внедрение.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u0427\u0442\u043E \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: '14px 0 48px',
      maxWidth: 640,
      lineHeight: 1.12
    }
  }, "\u0422\u0440\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u2014 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0439 \u043A\u0430\u0440\u0442\u044B \u0434\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    glow: i === 1,
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--grad-aurora-soft)',
      border: '1px solid var(--border-hairline)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 24,
    color: "var(--frost-blue)"
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, it.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-primary)',
      margin: '12px 0 10px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, it.text))))));
}

/* ================= PROCESS ================= */
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-section)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)',
      padding: '110px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u041C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: '14px 0 56px',
      maxWidth: 640,
      lineHeight: 1.12
    }
  }, "\u0423 \u043D\u0430\u0441 \u043D\u0435 \u0445\u0430\u043E\u0441, \u0430 \u043C\u0435\u0442\u043E\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    index: 1,
    title: "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430",
    result: "\u041A\u0430\u0440\u0442\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 2,
    title: "\u041A\u0430\u0440\u0442\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432",
    result: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0435 \u0437\u043E\u043D\u044B \u0418\u0418",
    active: true
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 3,
    title: "\u041F\u0438\u043B\u043E\u0442",
    result: "\u0417\u0430\u043F\u0443\u0441\u043A \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 4,
    title: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    result: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u0418\u0418"
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 5,
    title: "\u041C\u0430\u0441\u0448\u0442\u0430\u0431",
    result: "\u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0443",
    last: true
  }))));
}

/* ================= USE CASES (bento) ================= */
function UseCases() {
  const cases = [{
    icon: 'file-text',
    t: 'Подготовка КП',
    d: 'ИИ собирает коммерческие предложения из шаблонов и базы знаний.',
    span: 2
  }, {
    icon: 'headphones',
    t: 'Контроль качества',
    d: 'Анализ звонков и переписок, оценка скриптов.'
  }, {
    icon: 'database',
    t: 'База знаний',
    d: 'Ответы по внутренним документам за секунды.'
  }, {
    icon: 'graduation-cap',
    t: 'Обучение команды',
    d: 'ИИ-ассистент для онбординга и регламентов.',
    span: 2
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: '14px 0 48px',
      maxWidth: 640,
      lineHeight: 1.12
    }
  }, "\u0413\u0434\u0435 \u0418\u0418 \u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    style: {
      gridColumn: c.span ? 'span 2' : 'span 1'
    },
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    color: "var(--cyan)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, c.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, c.d))))));
}

/* ================= DASHBOARD / AI OPPORTUNITY MATRIX ================= */
function Dashboard() {
  const rows = [{
    p: 'Подготовка КП',
    prob: 'Ручная сборка, долго',
    eff: 'Высокий',
    cx: 'Низкая',
    status: 'Пилот',
    tone: 'violet'
  }, {
    p: 'Обработка заявок',
    prob: 'Теряются лиды',
    eff: 'Высокий',
    cx: 'Средняя',
    status: 'В работе',
    tone: 'cyan'
  }, {
    p: 'Контроль качества',
    prob: 'Нет системности',
    eff: 'Средний',
    cx: 'Средняя',
    status: 'Готов',
    tone: 'mint'
  }, {
    p: 'База знаний',
    prob: 'Знания в головах',
    eff: 'Средний',
    cx: 'Низкая',
    status: 'Оценка',
    tone: 'neutral'
  }];
  const th = {
    fontFamily: 'var(--font-ui)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    textAlign: 'left',
    padding: '0 16px 16px'
  };
  const td = {
    fontFamily: 'var(--font-ui)',
    fontSize: 15,
    color: 'var(--text-secondary)',
    padding: '16px',
    borderTop: '1px solid var(--border-default)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-section)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.4fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "AI Opportunity Matrix"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--text-primary)',
      margin: '14px 0 18px',
      lineHeight: 1.14
    }
  }, "\u0412\u0438\u0434\u043D\u043E, \u0433\u0434\u0435 \u0418\u0418 \u0434\u0430\u0451\u0442 \u044D\u0444\u0444\u0435\u043A\u0442, \u0430 \u0433\u0434\u0435 \u043F\u043E\u0434\u043E\u0436\u0434\u0451\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0446\u0435\u043D\u0451\u043D \u043F\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0443 \u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F. \u042D\u0442\u043E \u043D\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u0430 \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.")), /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "8px 8px 4px"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041F\u0440\u043E\u0446\u0435\u0441\u0441"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u042D\u0444\u0444\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      paddingRight: 0
    }
  }, "\u0421\u0442\u0430\u0442\u0443\u0441"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, r.p), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.prob), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.eff), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.cx), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    size: "sm",
    dot: r.tone !== 'neutral'
  }, r.status))))))))));
}

/* ================= PROOF ================= */
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "\u221240%",
    label: "\u0440\u0443\u0447\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u043E\u0441\u043B\u0435 \u043F\u0438\u043B\u043E\u0442\u0430"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6 \u043D\u0435\u0434\u0435\u043B\u044C",
    label: "\u043E\u0442 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\xD73",
    label: "\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u041A\u041F"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435",
    accent: false
  }))));
}

/* ================= FAQ ================= */
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-section)',
      borderTop: '1px solid var(--border-default)',
      padding: '110px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: '14px 0 40px',
      lineHeight: 1.12
    }
  }, "\u0421\u043E\u043C\u043D\u0435\u043D\u0438\u044F, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      q: 'Мы пока не понимаем, где применять ИИ',
      a: 'Именно с этого начинается диагностика. Мы строим карту процессов и показываем приоритетные зоны с измеримым эффектом.'
    }, {
      q: 'У нас нет технической команды',
      a: 'Сопровождаем внедрение под ключ и обучаем сотрудников работе с ИИ — отдельный отдел не нужен.'
    }, {
      q: 'Сотрудники могут сопротивляться',
      a: 'Внедряем точечно, с обучением и понятными регламентами. Команда видит пользу на конкретной задаче.'
    }, {
      q: 'Мы боимся за безопасность данных',
      a: 'Работаем с учётом требований к данным, обсуждаем контур и доступы на этапе диагностики.'
    }]
  })));
}

/* ================= DIAGNOSTIC FORM ================= */
function DiagnosticForm({
  open,
  onClose
}) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(4,3,8,0.7)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '60px 20px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Card, {
    glow: true,
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: EYEBROW
  }, "\u041C\u0438\u043D\u0438-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--text-primary)',
      margin: '10px 0 0'
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0418\u0418-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22,
    color: "var(--text-muted)"
  }))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 0 12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--grad-aurora-soft)',
      border: '1px solid var(--border-hairline)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--mint)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "\u0421\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F \u0438 \u043F\u0440\u0438\u0448\u043B\u0451\u043C \u043F\u043B\u0430\u043D \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, CEO"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0421\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    placeholder: "company.ru"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u0430\u043A\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0441\u0438\u043B\u0438\u0442\u044C \u0418\u0418?",
    multiline: true,
    rows: 3,
    hint: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u2014 \u044D\u0442\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0435"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")))));
}

/* ================= CTA + FOOTER ================= */
function CtaFooter({
  onCta
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION
    }
  }, /*#__PURE__*/React.createElement(Card, {
    glow: true,
    padding: "64px",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      color: 'var(--text-primary)',
      margin: '0 0 16px',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u043A\u0430\u0440\u0442\u044B, \u0430 \u043D\u0435 \u0441 \u0445\u0430\u043E\u0441\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      color: 'var(--text-secondary)',
      margin: '0 auto 32px',
      maxWidth: 560,
      lineHeight: 1.55
    }
  }, "\u0418\u0418-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u0433\u0434\u0435 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0434\u0430\u0441\u0442 \u044D\u0444\u0444\u0435\u043A\u0442 \u0443\u0436\u0435 \u0432 \u044D\u0442\u043E\u043C \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0435."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0418\u0418-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      background: 'var(--bg-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      padding: '40px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 AiNovation \u2014 \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F"))));
}

/* ================= APP ================= */
function Site() {
  const [formOpen, setFormOpen] = useState(false);
  const open = () => setFormOpen(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-base)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onCta: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onCta: open
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(UseCases, null), /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CtaFooter, {
    onCta: open
  }), /*#__PURE__*/React.createElement(DiagnosticForm, {
    open: formOpen,
    onClose: () => setFormOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

})();
