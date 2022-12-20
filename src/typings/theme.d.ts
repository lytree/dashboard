/** 主题相关类型 */
declare namespace Theme {
    /** 主题配置 */
    interface Setting {
        /** 暗黑模式 */
        darkMode: boolean;
        /** 是否自动跟随系统主题 */
        followSystemTheme: boolean;
        /** 固定头部和多页签 */
        fixedHeaderAndTab: boolean;
        /** 显示重载按钮 */
        showReload: boolean;
        /** 侧边栏样式 */
        sider: Sider;
        /** 菜单样式 */
        menu: Menu;
        /** 底部样式 */
        footer: Footer;
        /** 页面样式 */
        page: Page;
    }
    /** 侧边栏样式 */
    interface Sider {
        /** 侧边栏宽度 */
        width: number;
        /** 侧边栏折叠时的宽度 */
        collapsedWidth: number;
        /** vertical-mix模式下侧边栏宽度 */
        mixWidth: number;
        /** vertical-mix模式下侧边栏折叠时的宽度 */
        mixCollapsedWidth: number;
        /** vertical-mix模式下侧边栏的子菜单的宽度 */
        mixChildMenuWidth: number;
    }
    /** 底部样式 */
    interface Footer {
        /** 是否固定底部 */
        fixed: boolean;
        /** 底部高度 */
        height: number;
    }
    /** 全局头部属性 */
    interface GlobalHeaderProps {
        /** 显示logo */
        showLogo: boolean;
        /** 显示头部菜单 */
        showHeaderMenu: boolean;
        /** 显示菜单折叠按钮 */
        showMenuCollapse: boolean;
    }
}