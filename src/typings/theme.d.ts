/** 主题相关类型 */
declare namespace Theme {
    /** 主题配置 */
    interface Setting {
        /** 暗黑模式 */
        darkMode: boolean;
        // /** 是否自动跟随系统主题 */
        // followSystemTheme: boolean;
        // /** 侧边栏样式 */
        // sider: Sider;
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
}
/** 菜单项配置 */
type GlobalMenuOption = {
    key: string;
    label: string;
    routeName: string;
    routePath: string;
    icon?: () => import('vue').VNodeChild;
    children?: GlobalMenuOption[];
};
/** 面包屑 */
type GlobalBreadcrumb = import('element-plus').DropdownOption & {
    key: string;
    label: string;
    disabled: boolean;
    routeName: string;
    hasChildren: boolean;
    children?: GlobalBreadcrumb[];
};
