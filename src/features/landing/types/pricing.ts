export interface PricingPlan {
  dynamic: string
  name: string
  tagline: string
  monthlyPrice: number
  annualPrice: number
  features: PlanFeature[]
  featured?: boolean
  cta: string
}

export interface PlanFeature {
  label: string
  included: boolean
}
