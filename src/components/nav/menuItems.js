import setText from '../../utils/i18n/textSetter';

const menuItems = (hook) =>  {
    const { t } = hook() || {};
    return [
        t('menu_1', setText('HOME_MENU_ITEM_1')),
        t('menu_2', setText('HOME_MENU_ITEM_2')),
        t('menu_3', setText('HOME_MENU_ITEM_3')),
        t('menu_4', setText('HOME_MENU_ITEM_4'))
    ]
}

export default menuItems;
