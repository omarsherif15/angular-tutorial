export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: Date;
  description: string;
}

export const DUMMY_TASKS: Task[] = [
  // User u1 - Jasmine Washington tasks
  {
    id: 'task-1',
    userId: 'u1',
    title: 'Complete project proposal',
    dueDate: new Date('2026-02-15'),
    description: 'Finish the quarterly project proposal and submit for review',
  },
  {
    id: 'task-2',
    userId: 'u1',
    title: 'Review team feedback',
    dueDate: new Date('2026-02-10'),
    description: 'Collect and analyze feedback from the development team',
  },
  {
    id: 'task-3',
    userId: 'u1',
    title: 'Update documentation',
    dueDate: new Date('2026-02-20'),
    description: 'Update API documentation with latest changes',
  },

  // User u2 - Emily Thompson tasks
  {
    id: 'task-4',
    userId: 'u2',
    title: 'Fix critical bugs',
    dueDate: new Date('2026-02-05'),
    description: 'Address critical bugs reported in the production environment',
  },
  {
    id: 'task-5',
    userId: 'u2',
    title: 'Implement new feature',
    dueDate: new Date('2026-02-25'),
    description: 'Implement user authentication feature as per specifications',
  },
  {
    id: 'task-6',
    userId: 'u2',
    title: 'Code review',
    dueDate: new Date('2026-02-12'),
    description: 'Review pull requests from team members',
  },
  {
    id: 'task-7',
    userId: 'u2',
    title: 'Performance optimization',
    dueDate: new Date('2026-02-28'),
    description: 'Optimize database queries and improve app performance',
  },

  // User u3 - Marcus Johnson tasks
  {
    id: 'task-8',
    userId: 'u3',
    title: 'Design UI mockups',
    dueDate: new Date('2026-02-18'),
    description: 'Create mockups for the new dashboard interface',
  },
  {
    id: 'task-9',
    userId: 'u3',
    title: 'Conduct user testing',
    dueDate: new Date('2026-02-22'),
    description: 'Test new features with focus group and collect feedback',
  },
  {
    id: 'task-10',
    userId: 'u3',
    title: 'Create style guide',
    dueDate: new Date('2026-02-28'),
    description: 'Document design system and component guidelines',
  },

  // User u4 - David Miller tasks
  {
    id: 'task-11',
    userId: 'u4',
    title: 'Setup CI/CD pipeline',
    dueDate: new Date('2026-02-14'),
    description: 'Configure continuous integration and deployment workflows',
  },
  {
    id: 'task-12',
    userId: 'u4',
    title: 'Database migration',
    dueDate: new Date('2026-02-19'),
    description: 'Plan and execute database schema migration',
  },

  // User u5 - Priya Patel tasks
  {
    id: 'task-13',
    userId: 'u5',
    title: 'Write unit tests',
    dueDate: new Date('2026-02-16'),
    description: 'Write comprehensive unit tests for core modules',
  },
  {
    id: 'task-14',
    userId: 'u5',
    title: 'Security audit',
    dueDate: new Date('2026-02-24'),
    description: 'Perform security audit of the application',
  },

  // User u6 - Arjun Singh tasks
  {
    id: 'task-15',
    userId: 'u6',
    title: 'Client presentation',
    dueDate: new Date('2026-02-17'),
    description: 'Prepare and present demo to stakeholders',
  },
  {
    id: 'task-16',
    userId: 'u6',
    title: 'Sprint planning',
    dueDate: new Date('2026-02-11'),
    description: 'Plan tasks and stories for the next sprint',
  },
];
