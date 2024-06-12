import { LinguineCore } from './linguine.mjs'
import { translate } from './translate.mjs'

import fs from 'fs'

const main = async () => {
  const strings = {
    "Heimdall: Hacker News Summary": {
      "message": "Heimdall: Hacker News Summary"
    },
    "Summarizes Silicon Valley News in 30 Languages.": {
      "message": "Summarizes Silicon Valley News in 30 Languages."
    },
    "Already Loved by Professionals at Apple, Microsoft, etc.": {
      "message": "Already Loved by Professionals at Apple, Microsoft, etc."
    },
    "Completely Free.": {
      "message": "Completely Free."
    },
    "Subscribe": {
      "message": "Subscribe"
    },
    "Read First": {
      "message": "Read First"
    },
    "First, may I have your email?": {
      "message": "First, may I have your email?"
    },
    "Next, what languages do you speak?": {
      "message": "Next, what languages do you speak?"
    },
    "Would you mind receiving updates on what I'm working on?": {
      "message": "Would you mind receiving updates on what I'm working on?"
    },
    "theme.ErrorPageContent.title": {
      "message": "Trang này đã bị lỗi.",
      "description": "The title of the fallback page when the page crashed"
    },
    "theme.BackToTopButton.buttonAriaLabel": {
      "message": "Trở lại đầu trang",
      "description": "The ARIA label for the back to top button"
    },
    "theme.blog.paginator.navAriaLabel": {
      "message": "Thanh điều hướng của trang danh sách bài viết",
      "description": "The ARIA label for the blog pagination"
    },
    "theme.blog.paginator.newerEntries": {
      "message": "Các bài mới hơn",
      "description": "The label used to navigate to the newer blog posts page (previous page)"
    },
    "theme.blog.paginator.olderEntries": {
      "message": "Các bài cũ hơn",
      "description": "The label used to navigate to the older blog posts page (next page)"
    },
    "theme.blog.archive.title": {
      "message": "Lưu trữ",
      "description": "The page & hero title of the blog archive page"
    },
    "theme.blog.archive.description": {
      "message": "Lưu trữ",
      "description": "The page & hero description of the blog archive page"
    },
    "theme.blog.post.paginator.navAriaLabel": {
      "message": "Thanh điều hướng của trang bài viết",
      "description": "The ARIA label for the blog posts pagination"
    },
    "theme.blog.post.paginator.newerPost": {
      "message": "Bài mới hơn",
      "description": "The blog post button label to navigate to the newer/previous post"
    },
    "theme.blog.post.paginator.olderPost": {
      "message": "Bài cũ hơn",
      "description": "The blog post button label to navigate to the older/next post"
    },
    "theme.blog.post.plurals": {
      "message": "{count} bài viết",
      "description": "Pluralized label for \"{count} posts\". Use as much plural forms (separated by \"|\") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)"
    },
    "theme.blog.tagTitle": {
      "message": "{nPosts} được gắn thẻ \"{tagName}\"",
      "description": "The title of the page for a blog tag"
    },
    "theme.tags.tagsPageLink": {
      "message": "Xem tất cả Thẻ",
      "description": "The label of the link targeting the tag list page"
    },
    "theme.colorToggle.ariaLabel": {
      "message": "Chuyển đổi chế độ sáng và tối (hiện tại {mode})",
      "description": "The ARIA label for the navbar color mode toggle"
    },
    "theme.colorToggle.ariaLabel.mode.dark": {
      "message": "chế độ tối",
      "description": "The name for the dark color mode"
    },
    "theme.colorToggle.ariaLabel.mode.light": {
      "message": "chế độ sáng",
      "description": "The name for the light color mode"
    },
    "theme.docs.breadcrumbs.navAriaLabel": {
      "message": "Breadcrumbs",
      "description": "The ARIA label for the breadcrumbs"
    },
    "theme.docs.DocCard.categoryDescription": {
      "message": "{count} mục",
      "description": "The default description for a category card in the generated index about how many items this category includes"
    },
    "theme.docs.paginator.navAriaLabel": {
      "message": "Trang tài liệu",
      "description": "The ARIA label for the docs pagination"
    },
    "theme.docs.paginator.previous": {
      "message": "Trước",
      "description": "The label used to navigate to the previous doc"
    },
    "theme.docs.paginator.next": {
      "message": "Kế tiếp",
      "description": "The label used to navigate to the next doc"
    },
    "theme.docs.tagDocListPageTitle.nDocsTagged": {
      "message": "{count} tài liệu đã gắn thẻ",
      "description": "Pluralized label for \"{count} docs tagged\". Use as much plural forms (separated by \"|\") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)"
    },
    "theme.docs.tagDocListPageTitle": {
      "message": "{nDocsTagged} với \"{tagName}\"",
      "description": "The title of the page for a docs tag"
    },
    "theme.docs.versionBadge.label": {
      "message": "Phiên bản: {versionLabel}"
    },
    "theme.docs.versions.unreleasedVersionLabel": {
      "message": "Đây là tài liệu chưa được phát hành chính thức của {siteTitle} phiên bản {versionLabel}.",
      "description": "The label used to tell the user that he's browsing an unreleased doc version"
    },
    "theme.docs.versions.unmaintainedVersionLabel": {
      "message": "Đây là tài liệu của {siteTitle} {versionLabel}, hiện không còn được bảo trì.",
      "description": "The label used to tell the user that he's browsing an unmaintained doc version"
    },
    "theme.docs.versions.latestVersionSuggestionLabel": {
      "message": "Để xem các cập nhật mới nhất, vui lòng xem phiên bản {latestVersionLink} ({versionLabel}).",
      "description": "The label used to tell the user to check the latest version"
    },
    "theme.docs.versions.latestVersionLinkLabel": {
      "message": "phiên bản mới nhất",
      "description": "The label used for the latest version suggestion link label"
    },
    "theme.common.editThisPage": {
      "message": "Sửa trang này",
      "description": "The link label to edit the current page"
    },
    "theme.common.headingLinkTitle": {
      "message": "Đường dẫn trực tiếp tới {heading}",
      "description": "Title for link to heading"
    },
    "theme.lastUpdated.atDate": {
      "message": " vào {date}",
      "description": "The words used to describe on which date a page has been last updated"
    },
    "theme.lastUpdated.byUser": {
      "message": " bởi {user}",
      "description": "The words used to describe by who the page has been last updated"
    },
    "theme.lastUpdated.lastUpdatedAtBy": {
      "message": "Cập nhật lần cuối{atDate}{byUser}",
      "description": "The sentence used to display when a page has been last updated, and by who"
    },
    "theme.navbar.mobileVersionsDropdown.label": {
      "message": "Phiên bản",
      "description": "The label for the navbar versions dropdown on mobile view"
    },
    "theme.NotFound.title": {
      "message": "Không tìm thấy trang",
      "description": "The title of the 404 page"
    },
    "theme.tags.tagsListLabel": {
      "message": "Thẻ:",
      "description": "The label alongside a tag list"
    },
    "theme.AnnouncementBar.closeButtonAriaLabel": {
      "message": "Đóng",
      "description": "The ARIA label for close button of announcement bar"
    },
    "theme.admonition.caution": {
      "message": "cẩn thận",
      "description": "The default label used for the Caution admonition (:::caution)"
    },
    "theme.admonition.danger": {
      "message": "cảnh báo",
      "description": "The default label used for the Danger admonition (:::danger)"
    },
    "theme.admonition.info": {
      "message": "thông tin",
      "description": "The default label used for the Info admonition (:::info)"
    },
    "theme.admonition.note": {
      "message": "ghi chú",
      "description": "The default label used for the Note admonition (:::note)"
    },
    "theme.admonition.tip": {
      "message": "mẹo",
      "description": "The default label used for the Tip admonition (:::tip)"
    },
    "theme.admonition.warning": {
      "message": "warning",
      "description": "The default label used for the Warning admonition (:::warning)"
    },
    "theme.blog.sidebar.navAriaLabel": {
      "message": "Điều hướng các bài viết gần đây trên blog",
      "description": "The ARIA label for recent posts in the blog sidebar"
    },
    "theme.CodeBlock.copied": {
      "message": "Đã sao chép",
      "description": "The copied button label on code blocks"
    },
    "theme.CodeBlock.copyButtonAriaLabel": {
      "message": "Sao chép code vào bộ nhớ tạm",
      "description": "The ARIA label for copy code blocks button"
    },
    "theme.CodeBlock.copy": {
      "message": "Sao chép",
      "description": "The copy button label on code blocks"
    },
    "theme.CodeBlock.wordWrapToggle": {
      "message": "Chuyển đổi văn bản xuống dòng",
      "description": "The title attribute for toggle word wrapping button of code block lines"
    },
    "theme.DocSidebarItem.expandCategoryAriaLabel": {
      "message": "Expand sidebar category '{label}'",
      "description": "The ARIA label to expand the sidebar category"
    },
    "theme.DocSidebarItem.collapseCategoryAriaLabel": {
      "message": "Collapse sidebar category '{label}'",
      "description": "The ARIA label to collapse the sidebar category"
    },
    "theme.NavBar.navAriaLabel": {
      "message": "Main",
      "description": "The ARIA label for the main navigation"
    },
    "theme.navbar.mobileLanguageDropdown.label": {
      "message": "Ngôn ngữ",
      "description": "The label for the mobile language switcher dropdown"
    },
    "theme.NotFound.p1": {
      "message": "Chúng tôi không thể tìm thấy những gì bạn đang tìm kiếm.",
      "description": "The first paragraph of the 404 page"
    },
    "theme.NotFound.p2": {
      "message": "Vui lòng liên hệ với trang web đã dẫn bạn tới đây và thông báo cho họ biết rằng đường dẫn này bị hỏng.",
      "description": "The 2nd paragraph of the 404 page"
    },
    "theme.TOCCollapsible.toggleButtonLabel": {
      "message": "Trên trang này",
      "description": "The label used by the button on the collapsible TOC component"
    },
    "theme.blog.post.readMore": {
      "message": "Đọc tiếp",
      "description": "The label used in blog post item excerpts to link to full blog posts"
    },
    "theme.blog.post.readMoreLabel": {
      "message": "Đọc thêm về {title}",
      "description": "The ARIA label for the link to full blog posts from excerpts"
    },
    "theme.blog.post.readingTime.plurals": {
      "message": "{readingTime} phút để đọc",
      "description": "Pluralized label for \"{readingTime} min read\". Use as much plural forms (separated by \"|\") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)"
    },
    "theme.docs.breadcrumbs.home": {
      "message": "Trang chủ",
      "description": "The ARIA label for the home page in the breadcrumbs"
    },
    "theme.docs.sidebar.collapseButtonTitle": {
      "message": "Thu gọn thanh bên",
      "description": "The title attribute for collapse button of doc sidebar"
    },
    "theme.docs.sidebar.collapseButtonAriaLabel": {
      "message": "Thu gọn thanh bên",
      "description": "The title attribute for collapse button of doc sidebar"
    },
    "theme.docs.sidebar.navAriaLabel": {
      "message": "Docs sidebar",
      "description": "The ARIA label for the sidebar navigation"
    },
    "theme.docs.sidebar.closeSidebarButtonAriaLabel": {
      "message": "Close navigation bar",
      "description": "The ARIA label for close button of mobile sidebar"
    },
    "theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel": {
      "message": "← Trở lại menu chính",
      "description": "The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
    },
    "theme.docs.sidebar.toggleSidebarButtonAriaLabel": {
      "message": "Toggle navigation bar",
      "description": "The ARIA label for hamburger menu button of mobile navigation"
    },
    "theme.docs.sidebar.expandButtonTitle": {
      "message": "Mở rộng thanh bên",
      "description": "The ARIA label and title attribute for expand button of doc sidebar"
    },
    "theme.docs.sidebar.expandButtonAriaLabel": {
      "message": "Mở rộng thanh bên",
      "description": "The ARIA label and title attribute for expand button of doc sidebar"
    },
    "theme.SearchPage.documentsFound.plurals": {
      "message": "Tìm thấy {count} kết quả",
      "description": "Pluralized label for \"{count} documents found\". Use as much plural forms (separated by \"|\") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)"
    },
    "theme.SearchPage.existingResultsTitle": {
      "message": "Kết quả tìm kiếm cho \"{query}\"",
      "description": "The search page title for non-empty query"
    },
    "theme.SearchPage.emptyResultsTitle": {
      "message": "Tìm kiếm",
      "description": "The search page title for empty query"
    },
    "theme.SearchPage.inputPlaceholder": {
      "message": "Nhập từ khóa cần tìm vào đây",
      "description": "The placeholder for search page input"
    },
    "theme.SearchPage.inputLabel": {
      "message": "Tìm kiếm",
      "description": "The ARIA label for search page input"
    },
    "theme.SearchPage.algoliaLabel": {
      "message": "Tìm kiếm với Algolia",
      "description": "The ARIA label for Algolia mention"
    },
    "theme.SearchPage.noResultsText": {
      "message": "Không tìm thấy kết quả nào",
      "description": "The paragraph for empty search result"
    },
    "theme.SearchPage.fetchingNewResults": {
      "message": "Đang tải thêm kết quả...",
      "description": "The paragraph for fetching new search results"
    },
    "theme.SearchBar.label": {
      "message": "Tìm kiếm",
      "description": "The ARIA label and placeholder for search button"
    },
    "theme.SearchModal.searchBox.resetButtonTitle": {
      "message": "Xóa truy vấn",
      "description": "The label and ARIA label for search box reset button"
    },
    "theme.SearchModal.searchBox.cancelButtonText": {
      "message": "Hủy bỏ",
      "description": "The label and ARIA label for search box cancel button"
    },
    "theme.SearchModal.startScreen.recentSearchesTitle": {
      "message": "Gần đây",
      "description": "The title for recent searches"
    },
    "theme.SearchModal.startScreen.noRecentSearchesText": {
      "message": "Không có tìm kiếm nào gần đây",
      "description": "The text when no recent searches"
    },
    "theme.SearchModal.startScreen.saveRecentSearchButtonTitle": {
      "message": "Lưu tìm kiếm này",
      "description": "The label for save recent search button"
    },
    "theme.SearchModal.startScreen.removeRecentSearchButtonTitle": {
      "message": "Xóa tìm kiếm này khỏi lịch sử",
      "description": "The label for remove recent search button"
    },
    "theme.SearchModal.startScreen.favoriteSearchesTitle": {
      "message": "Yêu thích",
      "description": "The title for favorite searches"
    },
    "theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle": {
      "message": "Xóa tìm kiếm này khỏi danh sách yêu thích",
      "description": "The label for remove favorite search button"
    },
    "theme.SearchModal.errorScreen.titleText": {
      "message": "Không thể tìm nạp dữ liệu",
      "description": "The title for error screen of search modal"
    },
    "theme.SearchModal.errorScreen.helpText": {
      "message": "Bạn nên kiểm tra lại kết nối mạng của mình.",
      "description": "The help text for error screen of search modal"
    },
    "theme.SearchModal.footer.selectText": {
      "message": "để chọn",
      "description": "The explanatory text of the action for the enter key"
    },
    "theme.SearchModal.footer.selectKeyAriaLabel": {
      "message": "Nhập khóa",
      "description": "The ARIA label for the Enter key button that makes the selection"
    },
    "theme.SearchModal.footer.navigateText": {
      "message": "để điều hướng",
      "description": "The explanatory text of the action for the Arrow up and Arrow down key"
    },
    "theme.SearchModal.footer.navigateUpKeyAriaLabel": {
      "message": "Mũi tên lên",
      "description": "The ARIA label for the Arrow up key button that makes the navigation"
    },
    "theme.SearchModal.footer.navigateDownKeyAriaLabel": {
      "message": "Mũi tên xuống",
      "description": "The ARIA label for the Arrow down key button that makes the navigation"
    },
    "theme.SearchModal.footer.closeText": {
      "message": "để đóng",
      "description": "The explanatory text of the action for Escape key"
    },
    "theme.SearchModal.footer.closeKeyAriaLabel": {
      "message": "Phím thoát",
      "description": "The ARIA label for the Escape key button that close the modal"
    },
    "theme.SearchModal.footer.searchByText": {
      "message": "Tìm kiếm theo",
      "description": "The text explain that the search is making by Algolia"
    },
    "theme.SearchModal.noResultsScreen.noResultsText": {
      "message": "Không có kết quả dành cho",
      "description": "The text explains that there are no results for the following search"
    },
    "theme.SearchModal.noResultsScreen.suggestedQueryText": {
      "message": "Thử tìm kiếm",
      "description": "The text for the suggested query when no results are found for the following search"
    },
    "theme.SearchModal.noResultsScreen.reportMissingResultsText": {
      "message": "Tin rằng truy vấn này sẽ trả về kết quả?",
      "description": "The text for the question where the user thinks there are missing results"
    },
    "theme.SearchModal.noResultsScreen.reportMissingResultsLinkText": {
      "message": "Hãy để chúng tôi biết.",
      "description": "The text for the link to report missing results"
    },
    "theme.SearchModal.placeholder": {
      "message": "Tìm kiếm tài liệu",
      "description": "The placeholder of the input of the DocSearch pop-up modal"
    },
    "theme.SearchBar.seeAll": {
      "message": "Xem tất cả {count} kết quả"
    },
    "theme.ErrorPageContent.tryAgain": {
      "message": "Thử lại",
      "description": "The label of the button to try again rendering when the React error boundary captures an error"
    },
    "theme.common.skipToMainContent": {
      "message": "Nhảy tới nội dung",
      "description": "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"
    },
    "theme.tags.tagsPageTitle": {
      "message": "Thẻ",
      "description": "The title of the tag list page"
    },
    "theme.unlistedContent.title": {
      "message": "Trang không công khai",
      "description": "The unlisted content banner title"
    },
    "theme.unlistedContent.message": {
      "message": "Trang này không được công khai. Công cụ tìm kiếm sẽ không đánh chỉ mục cho trang này và chỉ những người có liên kết mới có thể truy cập được trang.",
      "description": "The unlisted content banner message"
    }
  }
  

  const translatedMap = {}

  await Promise.all(
    Object.keys(LinguineCore).map(async (locale) => {
      const localeCopy = structuredClone(strings)
      // translate the values of the copy
      await Promise.all(
        Object.keys(localeCopy).map(async (key) => {
          const translation = await translate({ text: [localeCopy[key].message], source: 'en', target: locale })
          localeCopy[key].message = translation[0]
        })
      )
      translatedMap[locale] = localeCopy
    })
  )

  await Promise.all(
    Object.keys(translatedMap).map(async (locale) => {
      // const path = `i18n/${locale}/docusaurus-theme-classic/navbar.json`
      const path = `i18n/${locale}/code.json`
      // we must append to the file, not overwrite it
      const json = JSON.parse(fs.readFileSync(path, 'utf8'))
      const newJson = {
        ...json,
        ...translatedMap[locale],
      }
      fs.writeFileSync(path, JSON.stringify(newJson, null, 2))
    })
  )
}

main().then(() => process.exit(0))
