import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function Highlight({children, backgroundColor, color, padding, marginRight}) {
  return (
    <span
    style={{
      backgroundColor: backgroundColor,
      color: color,      
      padding: padding,
      marginRight:marginRight,
      borderRadius: '16px',
      fontSize: '14px',
    }}>
    {children}
  </span>
  );
}

export function HighlightPost({children}) {
  const {colorMode} = useColorMode();
  var data = {
    'children': children,
    'backgroundColor': "rgba(87,167,59,0.4)",
    'color': colorMode === 'dark' ? "rgba(162,222,142,1)" : "rgba(36,121,7,1)",
    'padding': "2px 12px 2px 12px",
    'marginRight':"12px",
  }
  return Highlight(data)
}

export function HighlightPut({children}) {
  const {colorMode} = useColorMode();
  var data = {
    'children': children,
    'backgroundColor': "rgba(243,156,18,0.4)",
    'color': colorMode === 'dark' ? "rgba(252,213,151,1)" :  "rgba(166,102,0,1)",
    'padding': "2px 12px 2px 12px",
    'marginRight':"12px",
  }
 
  return Highlight(data)
}

export function HighlightPatch({children}) {
  const {colorMode} = useColorMode();
  var data = {
    'children': children,
    'backgroundColor': "rgba(179,228,163,0.4)",
    'color': colorMode === 'dark' ? "rgba(162,222,142,1)" : "rgba(36,121,7,1)",
    'padding': "2px 12px 2px 12px",
    'marginRight':"12px",
  }
  
  return Highlight(data)
}

export function HighlightGet({children}) {
  const {colorMode} = useColorMode();
  var data = {
    'children': children,
    'backgroundColor': "rgba(11,161,194,0.4)",
    'color': colorMode === 'dark' ? "rgba(119,214,234,1)" : "rgba(0,97,119,1)",
    'padding': "2px 12px 2px 12px",
    'marginRight':"12px",
  }
  return Highlight(data)
}

export function HighlightDelete({children}) {
  const {colorMode} = useColorMode();
  var data = {
    'children': children,
    'backgroundColor': "rgba(253,132,128,0.4)",
    'color': colorMode === 'dark' ? "rgba(255,176,173,1)" : "rgba(217,30,24,1)",
    'padding': "2px 12px 2px 12px",
    'marginRight':"12px",
  }
  return Highlight(data)
}

export function HighlightVar({children}) {
  var data = {
    'children': children,
    'color': "rgba(243,112,33,1)",
    'padding': "0px",
    'marginRight':"0px",
  }
  return Highlight(data)
}

