// assets
import {
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
const icons = { IconUsersGroup, IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable, IconFiles }

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
            url: '/chatflows',
            //url: '/chat-ai',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'agentflows',
            //title: 'Agentflows',
            title: 'Agentic AI',
            type: 'item',
            url: '/agentflows',
            //url: '/agentic-ai',
            icon: icons.IconUsersGroup,
            breadcrumbs: true,
            //isBeta: true
            isBeta: false
        },
        {
            id: 'assistants',
            title: 'Assistants',
            type: 'item',
            url: '/assistants',
            icon: icons.IconRobot,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            //title: 'Tools',
            title: 'Custom Tools',
            type: 'item',
            url: '/tools',
            //url: '/custom-tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        {
            id: 'variables',
            //title: 'Variables',
            title: 'System Variables',
            type: 'item',
            url: '/variables',
            //url: '/system-variables',
            icon: icons.IconVariable,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            //title: 'API Keys',
            title: 'API',
            type: 'item',
            url: '/apikey',
            //url: '/api',
            icon: icons.IconKey,
            breadcrumbs: true
        },
        {
            id: 'document-stores',
            //title: 'Document Stores',
            title: 'Knowledge Base',
            type: 'item',
            url: '/document-stores',
            //url: '/knowledge-base',
            icon: icons.IconFiles,
            breadcrumbs: true
        }
    ]
}

export default dashboard
