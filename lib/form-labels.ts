export const SERVICE_TYPES = {
  free_walkthrough: "Free Walkthrough · 20 min",
  home_reset_60: "Home Reset · 60 min",
  home_reset_90: "Home Reset · 90 min",
  mommy_reset: "Mommy Reset · 1 hr",
  not_sure: "Not sure — help me decide",
} as const;

export const SERVICE_FREQUENCIES = {
  twice_week: "2× / week",
  once_week: "1× / week",
  one_time: "One-time visit",
  not_sure: "Not sure — help me decide",
} as const;

export const ADDONS = {
  fridge_cleaning: { label: "Fridge Cleaning", duration: "30–45 min" },
  pantry_reset: { label: "Pantry Reset", duration: "30–45 min" },
  organization_projects: { label: "Organization Projects", duration: "60–90 min" },
  deep_clean: { label: "Deep Clean", duration: "2–4 hrs" },
  toy_purge: { label: "Toy Purge", duration: "60 min" },
} as const;

export const LEAD_SOURCES = {
  contact_form: "Contact Form",
  book_a_visit: "Book a Visit",
  quote_request: "Quote Request",
  referral: "Referral",
  instagram: "Instagram",
  google: "Google",
  word_of_mouth: "Word of Mouth",
  other: "Other",
} as const;

export type ServiceTypeValue = keyof typeof SERVICE_TYPES;
export type ServiceFrequencyValue = keyof typeof SERVICE_FREQUENCIES;
export type AddonValue = keyof typeof ADDONS;
export type LeadSourceValue = keyof typeof LEAD_SOURCES;

export function getServiceTypeLabel(value: ServiceTypeValue): string {
  return SERVICE_TYPES[value];
}
export function getServiceFrequencyLabel(value: ServiceFrequencyValue): string {
  return SERVICE_FREQUENCIES[value];
}
export function getAddonLabel(value: AddonValue): string {
  return ADDONS[value].label;
}
