export const MODERATION_TEMPLATES = {
  report_resolved: [
    'Report Resolved - Content reviewed and action taken',
    'Report Resolved - Confession removed',
    'Report Resolved - User warned',
  ],
  report_dismissed: [
    'Report Dismissed - No violation found',
    'Report Dismissed - Content is within guidelines',
    'Report Dismissed - False report',
  ],
  confession_deleted: [
    'Confession Deleted - Violates community guidelines',
    'Confession Deleted - Spam content',
    'Confession Deleted - Inappropriate content',
  ],
  user_banned: [
    'User Banned - Repeated violations',
    'User Banned - Severe content violation',
    'User Banned - Harassment',
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