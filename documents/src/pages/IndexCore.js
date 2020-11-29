class IndexCore {
    callbacks (menus, setMenus) {
        return {
            changeCheck: (menu_code) => setMenus(INDEX_CORE.changeCheck(menu_code, menus)),
            clearAll: () => setMenus(INDEX_CORE.clearAll(menus)),
            checkAll: () => setMenus(INDEX_CORE.checkAll(menus)),
        };
    }
    isActive (code, menus) {
        return  menus.find(d=>d.code===code).active;
    }
    changeCheck (menu_code, menus) {
        return menus.map(d => {
            if (d.code!==menu_code)
                return d;

            let new_d = {...d};
            new_d.active = !new_d.active;
            return new_d;
        });
    }
    clearAll (menus) {
        return menus.map(d => {
            if (!d.active)
                return d;

            let new_d = {...d};
            new_d.active = false;
            return new_d;
        });
    }
    checkAll (menus) {
        return menus.map(d => {
            if (d.active)
                return d;

            let new_d = {...d};
            new_d.active = true;
            return new_d;
        });
    }
};

const INDEX_CORE = new IndexCore();

export default INDEX_CORE;
