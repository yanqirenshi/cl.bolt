class IndexCore {
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
