
chrome.contextMenus.create({
  id: 'things',
  title: 'Add to Things',
  contexts: ['all'],
});

// Uses same formatting and setup as the Add to Things 3 extension
// https://github.com/kristofferR/add-to-things-3

function contextAction(info, tab) {
  const { menuItemId } = info;

  var selection = info.selectionText;
  selection = selection ? '\n' + selection : '';

  // Things 3.4 URL Scheme
  // https://support.culturedcode.com/customer/en/portal/articles/2803573
  if (menuItemId === 'things'){
    var thingsURL = 'things:///add?show-quick-entry=true&title=' + encodeURIComponent(tab.title) + '&notes=' + encodeURIComponent(tab.url + selection);
    chrome.tabs.update({ url: thingsURL });
  }
};

chrome.contextMenus.onClicked.addListener(contextAction)
