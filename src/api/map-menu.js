export const mapMenu = (menu = {}) => {
  const {
    new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImg = '' } = '',
    menu: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    links: mapMenuLinks(links),
    srcImg,
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      new_tab: newTab = true,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
