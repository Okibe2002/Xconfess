export const MODERATION_TEMPLATES = {
  report_resolved: [
    'REPORT RESOLVED - Content reviewed and action taken',
    'REPORT RESOLVED - Confession removed',
    'REPORT RESOLVED - User warned',
  ],
  report_dismissed: [
    'REPORT DISMISSED - No violation found',
    'REPORT DISMISSED - Content is within guidelines',
    'REPORT DISMISMED - False report',
  ],
  confession_deleted: [
    'CONFESSION DELETED - Violates community guidelines',
    'CONFESSION DELETED - Spam content',
    'CONFESSION DELETED - Inappropriate content',
  ],
  user_banned: [
    'USER BANNED - Repeated violations',
    'USER BANNED - Severe content violation',
    'USER BANNED - Harassment',
  ],
};

export function getTemplate(action: string, index = 0): string | null {
  const templates =
    MODERATION_TEMPLATES[action as keyof typeof MODERATION_TEMPLATES];
  if (!templates || templates.length === 0) {
    return null;
  }
  return templates[index % templates.length] || null;
}
