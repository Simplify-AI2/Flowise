// assets
import {
    IconPencilCode,
    IconPasswordUser,
    IconCloudLock,
    IconLocationShare,
    IconAppsOff,
    IconArchive,
    IconApps,
    IconLayoutList,
    IconMan,
    IconMessageChatbot,
    IconUsersPlus,
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles
} from '@tabler/icons-react'

// constant
const icons = {
    IconPencilCode,
    IconPasswordUser,
    IconCloudLock,
    IconLocationShare,
    IconAppsOff,
    IconArchive,
    IconApps,
    IconLayoutList,
    IconMan,
    IconMessageChatbot,
    IconUsersPlus,
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles
}

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            //title: 'Chatflows',
            title: 'Chat AI',
            type: 'item',
            //url: '/chatflows',
            url: '/chat-ai',
            //icon: icons.IconHierarchy,
            icon: icons.IconMessageChatbot,
            breadcrumbs: true
        },
        {
            id: 'agentflows',
            //title: 'Agentflows',
            title: 'Agentic AI',
            type: 'item',
            //url: '/agentflows',
            url: '/agentic-ai',
            //icon: icons.IconUsersGroup,
            icon: icons.IconUsersPlus,
            breadcrumbs: true,
            //isBeta: true
            isBeta: false
        },
        {
            id: 'assistants',
            //title: 'Assistants',
            title: 'Virtual Assistants',
            type: 'item',
            //url: '/assistants',
            url: '/virtual-assistants',
            //icon: icons.IconRobot,
            icon: icons.IconMan,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            //icon: icons.IconBuildingStore,
            icon: icons.IconApps,
            breadcrumbs: true
        },
        {
            id: 'tools',
            //title: 'Tools',
            title: 'Custom Tools',
            type: 'item',
            //url: '/tools',
            url: '/custom-tools',
            //icon: icons.IconTool,
            icon: IconLocationShare,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            //icon: icons.IconLock,
            icon: icons.IconPasswordUser,
            breadcrumbs: true
        },
        {
            id: 'variables',
            //title: 'Variables',
            title: 'System Variables',
            type: 'item',
            //url: '/variables',
            url: '/system-variables',
            //icon: icons.IconVariable,
            icon: icons.IconPencilCode,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            //title: 'API Keys',
            title: 'API',
            type: 'item',
            //url: '/apikey',
            url: '/api',
            //icon: icons.IconKey,
            icon: icons.IconCloudLock,
            breadcrumbs: true
        },
        {
            id: 'document-stores',
            //title: 'Document Stores',
            title: 'Knowledge Base',
            type: 'item',
            //url: '/document-stores',
            url: '/knowledge-base',
            //icon: icons.IconFiles,
            icon: icons.IconLayoutList,
            breadcrumbs: true
        }
    ]
}

export default dashboard
