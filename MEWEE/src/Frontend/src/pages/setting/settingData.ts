import { useTranslation } from "react-i18next";

export const dropdownTabsData = () => {
  const { t } = useTranslation();

  const dropdownTabs  = [
    {
      id: "1",
      title: t('profile'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "2",
      title: t('privacy_security'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "3",
      title: t('public_profile'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "4",
      title: t('account_management'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "5",
      title: t('business_account'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "6",
      title: t('sign_out'),
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return dropdownTabs;
};

export const switchTabsData = () => {
  const { t } = useTranslation();

  const switchTabs = [
    {
      id: "1",
      title: t('hide_profile'),
      switchActive: true,
    },
    {
      id: "2",
      title: t('save_login_details'),
      switchActive: false,
    },
    {
      id: "3",
      title: t('notification'),
      switchActive: true,
    },
    {
      id: "4",
      title: t('personalized_advertising'),
      switchActive: true,
    },
    {
      id: "5",
      title: t('activity_status'),
      switchActive: false,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem",
    },
    {
      id: "6",
      title: t('allow_interact'),
      switchActive: false,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem",
    },
  ];

  return switchTabs;
};

