// lib/planGenerator.js
import * as ai from './aiExerciseSelector';

/**
 * generateProfessionalPlan(profile)
 * Wrapper for ai.createPlan
 */
export function generateProfessionalPlan(profile = {}) {
  const plan = ai.createPlan(profile);
  plan.profile = plan.profile || profile;
  return plan;
}

/**
 * getAlternatives(name, pool, count, profile)
 * Re-export for compatibility with existing UI import paths
 */
export function getAlternatives(name, pool = 'gym', count = 5, profile = {}) {
  return ai.getAlternatives(name, pool, count, profile);
}

export default generateProfessionalPlan;
