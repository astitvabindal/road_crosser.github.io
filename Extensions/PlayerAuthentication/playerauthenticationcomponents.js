var gdjs;
(function (y) {
  const d = new y.Logger("Player Authentication");
  let m;
  (function (s) {
    const u = ({ platform: n, isGameRegistered: t }) =>
      t
        ? {
            title: "Logging in...",
            text1:
              n === "cordova-websocket"
                ? "One moment, we're opening a window for you to log in."
                : "One moment, we're opening a new page with your web browser for you to log in.",
            text2:
              n === "cordova-websocket"
                ? ""
                : "If the window did not open, please check your pop-up blocker and click the button below to try again.",
          }
        : {
            title: "Publish your game!",
            text1:
              "GDevelop's player accounts are only available for published games.",
            text2:
              "Click the button below to learn how to publish your game then try again.",
          };
    (s.computeAuthenticationContainer = function (n) {
      const t = document.createElement("div");
      (t.id = "authentication-root-container"),
        (t.style.position = "relative"),
        (t.style.backgroundColor = "rgba(14, 6, 45, 0.5)"),
        (t.style.opacity = "1"),
        (t.style.width = "100%"),
        (t.style.height = "100%"),
        (t.style.zIndex = "2"),
        (t.style.pointerEvents = "all");
      const i = document.createElement("div");
      (i.id = "authentication-frame-container"),
        (i.style.backgroundColor = "#FFFFFF"),
        (i.style.position = "absolute"),
        (i.style.top = "16px"),
        (i.style.bottom = "16px"),
        (i.style.left = "16px"),
        (i.style.right = "16px"),
        (i.style.borderRadius = "8px"),
        (i.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"),
        (i.style.padding = "16px");
      const l = document.createElement("div");
      (l.style.cursor = "pointer"),
        (l.style.display = "flex"),
        (l.style.justifyContent = "right"),
        (l.style.alignItems = "center"),
        (l.style.zIndex = "3"),
        r(l, n);
      const e = document.createElement("img");
      e.setAttribute("width", "15px"),
        e.setAttribute(
          "src",
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODUzNTUgMC4xNDY0NDdDOC4wNDg4MiAwLjM0MTcwOSA4LjA0ODgyIDAuNjU4MjkxIDcuODUzNTUgMC44NTM1NTNMMC44NTM1NTMgNy44NTM1NUMwLjY1ODI5MSA4LjA0ODgyIDAuMzQxNzA5IDguMDQ4ODIgMC4xNDY0NDcgNy44NTM1NUMtMC4wNDg4MTU1IDcuNjU4MjkgLTAuMDQ4ODE1NSA3LjM0MTcxIDAuMTQ2NDQ3IDcuMTQ2NDVMNy4xNDY0NSAwLjE0NjQ0N0M3LjM0MTcxIC0wLjA0ODgxNTUgNy42NTgyOSAtMC4wNDg4MTU1IDcuODUzNTUgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNDY0NDcgMC4xNDY0NDdDMC4zNDE3MDkgLTAuMDQ4ODE1NSAwLjY1ODI5MSAtMC4wNDg4MTU1IDAuODUzNTUzIDAuMTQ2NDQ3TDcuODUzNTUgNy4xNDY0NUM4LjA0ODgyIDcuMzQxNzEgOC4wNDg4MiA3LjY1ODI5IDcuODUzNTUgNy44NTM1NUM3LjY1ODI5IDguMDQ4ODIgNy4zNDE3MSA4LjA0ODgyIDcuMTQ2NDUgNy44NTM1NUwwLjE0NjQ0NyAwLjg1MzU1M0MtMC4wNDg4MTU1IDAuNjU4MjkxIC0wLjA0ODgxNTUgMC4zNDE3MDkgMC4xNDY0NDcgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+Cjwvc3ZnPgo="
        ),
        l.appendChild(e);
      const o = document.createElement("div");
      (o.id = "authentication-container-loader"),
        (o.style.display = "flex"),
        (o.style.flexDirection = "column"),
        (o.style.height = "100%"),
        (o.style.width = "100%"),
        (o.style.justifyContent = "center"),
        (o.style.alignItems = "center");
      const c = document.createElement("img");
      c.setAttribute("width", "28px"),
        c.setAttribute(
          "src",
          "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0Ij48L2NpcmNsZT4KPHBhdGggb3BhY2l0eT0nMC43NScgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3oiPjwvcGF0aD4KPC9zdmc+"
        ),
        (c.style.marginTop = "50px");
      try {
        c.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(359deg)" }],
          { duration: 3e3, iterations: 1 / 0 }
        );
      } catch {
        d.warn("Animation not supported, loader will be fixed.");
      }
      o.appendChild(c);
      const a = document.createElement("div");
      return (
        (a.style.display = "flex"),
        (a.style.flexDirection = "column"),
        (a.style.height = "100%"),
        (a.style.width = "100%"),
        (a.style.justifyContent = "stretch"),
        (a.style.alignItems = "stretch"),
        (a.style.display = "none"),
        i.appendChild(l),
        i.appendChild(o),
        i.appendChild(a),
        t.appendChild(i),
        { rootContainer: t, loaderContainer: o, iframeContainer: a }
      );
    }),
      (s.displayIframeInsideAuthenticationContainer = (n, t, i, l) => {
        const e = document.createElement("iframe");
        e.setAttribute(
          "sandbox",
          "allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"
        ),
          e.addEventListener("load", () => {
            (n.style.display = "flex"), (t.style.display = "none");
          }),
          e.addEventListener("loaderror", () => {
            s.addAuthenticationUrlToTextsContainer(() => {
              n.removeChild(e),
                (n.style.display = "none"),
                (t.style.display = "flex"),
                s.displayIframeInsideAuthenticationContainer(n, t, i, l);
            }, i);
          }),
          (e.src = l),
          (e.style.flex = "1"),
          (e.style.border = "0"),
          n.appendChild(e);
      }),
      (s.addAuthenticationTextsToLoadingContainer = (n, t, i, l) => {
        const e = document.createElement("div");
        (e.id = "authentication-container-texts"),
          (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.width = "100%"),
          (e.style.justifyContent = "center"),
          (e.style.alignItems = "center"),
          (e.style.position = "relative"),
          (e.style.zIndex = "3"),
          (e.style.fontSize = "11pt"),
          (e.style.fontFamily =
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        const o = u({ platform: t, isGameRegistered: i }),
          c = document.createElement("h1");
        (c.innerText = o.title),
          (c.style.fontSize = "20pt"),
          (c.style.fontWeight = "bold");
        const a = document.createElement("p");
        a.innerText = o.text1;
        const D = document.createElement("p");
        if (
          ((D.innerText = o.text2),
          e.appendChild(c),
          e.appendChild(a),
          e.appendChild(D),
          !i && ((n.innerHTML = ""), l))
        ) {
          const M = document.createElement("a");
          r(M, l),
            (M.innerText = "How to publish my game"),
            (M.style.color = "#0078d4"),
            (M.style.textDecoration = "none"),
            (M.style.textDecoration = "underline"),
            (M.style.cursor = "pointer"),
            e.appendChild(M);
        }
        return n.prepend(e), e;
      }),
      (s.addAuthenticationUrlToTextsContainer = (n, t) => {
        const i = document.createElement("a");
        r(i, n),
          (i.innerText = "Try again"),
          (i.style.color = "#0078d4"),
          (i.style.textDecoration = "none"),
          (i.style.textDecoration = "underline"),
          (i.style.cursor = "pointer"),
          t.appendChild(i);
      }),
      (s.computeDismissableBanner = function (n) {
        const t = document.createElement("div");
        (t.id = "authenticated-banner"),
          (t.style.position = "absolute"),
          (t.style.pointerEvents = "all"),
          (t.style.backgroundColor = "#0E062D"),
          (t.style.top = "0px"),
          (t.style.height = "48px"),
          (t.style.left = "0px"),
          (t.style.width = "100%"),
          (t.style.padding = "6px 16px"),
          (t.style.zIndex = "1"),
          (t.style.display = "flex"),
          (t.style.flexDirection = "row-reverse"),
          (t.style.justifyContent = "space-between"),
          (t.style.alignItems = "center"),
          (t.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"),
          (t.style.fontSize = "11pt"),
          (t.style.color = "#FFFFFF"),
          (t.style.fontFamily =
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        const i = document.createElement("div");
        (i.style.cursor = "pointer"),
          (i.style.display = "flex"),
          (i.style.justifyContent = "center"),
          (i.style.alignItems = "center"),
          (i.style.zIndex = "3"),
          (i.style.marginRight = "32px"),
          (i.style.height = "100%"),
          r(i, n);
        const l = document.createElement("img");
        return (
          l.setAttribute("width", "30px"),
          l.setAttribute(
            "src",
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjc1IDguMDEyNUwyMS45ODc1IDYuMjVMMTUgMTMuMjM3NUw4LjAxMjUgNi4yNUw2LjI1IDguMDEyNUwxMy4yMzc1IDE1TDYuMjUgMjEuOTg3NUw4LjAxMjUgMjMuNzVMMTUgMTYuNzYyNUwyMS45ODc1IDIzLjc1TDIzLjc1IDIxLjk4NzVMMTYuNzYyNSAxNUwyMy43NSA4LjAxMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
          ),
          i.appendChild(l),
          t.appendChild(i),
          t
        );
      }),
      (s.computeAuthenticatedBanner = function (n, t, i) {
        const l = s.computeDismissableBanner(t),
          e = i || "Anonymous",
          o = document.createElement("div"),
          c = document.createElement("p");
        (c.id = "loggedText"),
          (c.innerHTML = `<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
                                Logged as ${e}`),
          (c.style.margin = "0px");
        const a = document.createElement("p");
        return (
          (a.id = "changeAccountText"),
          (a.innerText = "Click here to switch to another account."),
          (a.style.margin = "0px"),
          (a.style.marginTop = "4px"),
          (a.style.textDecoration = "underline"),
          (a.style.cursor = "pointer"),
          r(a, n),
          o.appendChild(c),
          o.appendChild(a),
          l.appendChild(o),
          l
        );
      }),
      (s.computeNotAuthenticatedBanner = function (n, t) {
        const i = s.computeDismissableBanner(t),
          l = document.createElement("div"),
          e = document.createElement("p");
        (e.id = "loggedText"),
        //   (e.innerHTML = "You are not authenticated."),
          (e.style.margin = "0px");
        const o = document.createElement("p");
        return (
          (o.id = "changeAccountText"),
        //   (o.innerText = "Click here to log in."),
          (o.style.margin = "0px"),
          (o.style.marginTop = "4px"),
          (o.style.textDecoration = "underline"),
          (o.style.cursor = "pointer"),
          r(o, n),
          l.appendChild(e),
          l.appendChild(o),
          i.appendChild(l),
          i
        );
      }),
      (s.displayLoggedInNotification = function (n, t) {
        s.showNotification(
          n,
          "authenticated-notification",
          `<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
              Logged as ${t}`,
          "success"
        );
      }),
      (s.displayLoggedOutNotification = function (n) {
        s.showNotification(
          n,
          "authenticated-notification",
          `<img style="margin-right:4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4xNjY2NyAwQzEuODY2NjcgMCAwIDEuODY2NjcgMCA0LjE2NjY3QzAgNi40NjY2NyAxLjg2NjY3IDguMzMzMzMgNC4xNjY2NyA4LjMzMzMzQzYuNDY2NjcgOC4zMzMzMyA4LjMzMzMzIDYuNDY2NjcgOC4zMzMzMyA0LjE2NjY3QzguMzMzMzMgMS44NjY2NyA2LjQ2NjY3IDAgNC4xNjY2NyAwWk0zLjMzMzMzIDYuMjVMMS4yNSA0LjE2NjY3TDEuODM3NSAzLjU3OTE3TDMuMzMzMzMgNS4wNzA4M0w2LjQ5NTgzIDEuOTA4MzNMNy4wODMzMyAyLjVMMy4zMzMzMyA2LjI1WiIgZmlsbD0iIzAwQ0M4MyIvPgo8L3N2Zz4K" />
              Logged out`,
          "success"
        );
      }),
      (s.displayErrorNotification = function (n) {
        s.showNotification(
          n,
          "error-notification",
          "An error occurred while authenticating, please try again.",
          "error"
        );
      }),
      (s.showNotification = function (n, t, i, l) {
        const e = document.createElement("div");
        (e.id = t),
          (e.style.position = "absolute"),
          (e.style.pointerEvents = "all"),
          (e.style.backgroundColor = l === "success" ? "#0E062D" : "red"),
          (e.style.top = "12px"),
          (e.style.right = "16px"),
          (e.style.padding = "6px 32px 6px 6px"),
          (e.style.zIndex = "1"),
          (e.style.display = "flex"),
          (e.style.flexDirection = "row-reverse"),
          (e.style.justifyContent = "space-between"),
          (e.style.alignItems = "center"),
          (e.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"),
          (e.style.borderRadius = "4px"),
          (e.style.fontSize = "11pt"),
          (e.style.color = "#FFFFFF"),
          (e.style.fontFamily =
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
        try {
          e.animate(
            [
              { transform: "translateY(-30px)", opacity: 0 },
              { transform: "translateY(0px)", opacity: 1 },
            ],
            { duration: 700, easing: "ease-out" }
          );
        } catch {
          d.warn("Animation not supported, div will be fixed.");
        }
        const o = document.createElement("p");
        (o.id = "loggedText"),
          (o.innerHTML = i),
          (o.style.margin = "0px"),
          e.appendChild(o),
          n.appendChild(e);
        const c = 700,
          a = 5e3;
        setTimeout(() => {
          try {
            e.animate(
              [
                { transform: "translateY(0px)", opacity: 1 },
                { transform: "translateY(-30px)", opacity: 0 },
              ],
              { duration: c, easing: "ease-in" }
            );
          } catch {
            d.warn("Animation not supported, div will be fixed.");
          }
        }, a),
          setTimeout(() => {
            e.remove();
          }, a + c);
      });
    const r = function (n, t) {
      n.addEventListener("touchstart", (i) => {
        t();
      }),
        n.addEventListener("click", (i) => {
          t();
        });
    };
  })(
    (m =
      y.playerAuthenticationComponents ||
      (y.playerAuthenticationComponents = {}))
  );
})(gdjs || (gdjs = {}));
//# sourceMappingURL=playerauthenticationcomponents.js.map
