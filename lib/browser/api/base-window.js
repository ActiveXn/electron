'use strict';

const electron = require('electron');
const { EventEmitter } = require('events');
const { BaseWindow } = process._linkedBinding('electron_browser_base_window');

Object.setPrototypeOf(BaseWindow.prototype, EventEmitter.prototype);

BaseWindow.prototype._init = function () {
  // Avoid recursive require.
  const { app } = electron;

  // Simulate the application menu on platforms other than macOS.
  if (process.platform !== 'darwin') {
    const menu = app.applicationMenu;
    if (menu) this.setMenu(menu);
  }
};

// Properties

Object.defineProperty(BaseWindow.prototype, 'autoHideMenuBar', {
  get: function () { return this.isMenuBarAutoHide(); },
  set: function (autoHide) { this.setAutoHideMenuBar(autoHide); }
});

Object.defineProperty(BaseWindow.prototype, 'visibleOnAllWorkspaces', {
  get: function () { return this.isVisibleOnAllWorkspaces(); },
  set: function (visible) { this.setVisibleOnAllWorkspaces(visible); }
});

Object.defineProperty(BaseWindow.prototype, 'fullScreen', {
  get: function () { return this.isFullScreen(); },
  set: function (full) { this.setFullScreen(full); }
});

Object.defineProperty(BaseWindow.prototype, 'simpleFullScreen', {
  get: function () { return this.isSimpleFullScreen(); },
  set: function (simple) { this.setSimpleFullScreen(simple); }
});

Object.defineProperty(BaseWindow.prototype, 'kiosk', {
  get: function () { return this.isKiosk(); },
  set: function (kiosk) { this.setKiosk(kiosk); }
});

Object.defineProperty(BaseWindow.prototype, 'documentEdited', {
  get: function () { return this.isFullscreen(); },
  set: function (edited) { this.setDocumentEdited(edited); }
});

Object.defineProperty(BaseWindow.prototype, 'shadow', {
  get: function () { return this.hasShadow(); },
  set: function (shadow) { this.setHasShadow(shadow); }
});

Object.defineProperty(BaseWindow.prototype, 'representedFilename', {
  get: function () { return this.getRepresentedFilename(); },
  set: function (filename) { this.setRepresentedFilename(filename); }
});

Object.defineProperty(BaseWindow.prototype, 'minimizable', {
  get: function () { return this.isMinimizable(); },
  set: function (min) { this.setMinimizable(min); }
});

Object.defineProperty(BaseWindow.prototype, 'title', {
  get: function () { return this.getTitle(); },
  set: function (title) { this.setTitle(title); }
});

Object.defineProperty(BaseWindow.prototype, 'maximizable', {
  get: function () { return this.isMaximizable(); },
  set: function (max) { this.setMaximizable(max); }
});

Object.defineProperty(BaseWindow.prototype, 'resizable', {
  get: function () { return this.isResizable(); },
  set: function (res) { this.setResizable(res); }
});

Object.defineProperty(BaseWindow.prototype, 'menuBarVisible', {
  get: function () { return this.isMenuBarVisible(); },
  set: function (visible) { this.setMenuBarVisibility(visible); }
});

Object.defineProperty(BaseWindow.prototype, 'fullScreenable', {
  get: function () { return this.isFullScreenable(); },
  set: function (full) { this.setFullScreenable(full); }
});

Object.defineProperty(BaseWindow.prototype, 'closable', {
  get: function () { return this.isClosable(); },
  set: function (close) { this.setClosable(close); }
});

Object.defineProperty(BaseWindow.prototype, 'movable', {
  get: function () { return this.isMovable(); },
  set: function (move) { this.setMovable(move); }
});

BaseWindow.getFocusedWindow = () => {
  return BaseWindow.getAllWindows().find((win) => win.isFocused());
};

module.exports = BaseWindow;