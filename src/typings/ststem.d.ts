/** 主题相关类型 */
declare namespace Theme {
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
        /** 侧边栏反转色 */
        inverted: boolean;
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
    /** 面包屑样式 */
    interface Crumb {
        /** 面包屑可见 */
        visible: boolean;
        /** 显示图标 */
        showIcon: boolean;
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
