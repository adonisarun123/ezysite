import {
  ON_DEMAND_HELP_CITY,
  ON_DEMAND_HELP_TASKS,
  type OnDemandHelpArea,
  type OnDemandHelpDurationHours,
  type OnDemandHelpTaskId,
} from './onDemandHelp'
import { endMinutesForSlot, formatMinutesAsClock } from './onDemandHelpSlots'

export function buildOnDemandHelpTimingSummary(
  serviceDate: string,
  slotMinutes: number,
  durationHours: OnDemandHelpDurationHours
): string {
  return `Date: ${serviceDate}; Start: ${formatMinutesAsClock(slotMinutes)}; Duration: ${durationHours}h; Window 9:00 AM–7:30 PM`
}

export function buildOnDemandHelpSpecificRequirements(params: {
  taskIds: OnDemandHelpTaskId[]
  area: OnDemandHelpArea
  serviceDate: string
  slotMinutes: number
  durationHours: OnDemandHelpDurationHours
  apartmentOrSocietyName: string
  flatUnitDetails: string
  landmark?: string
  notes?: string
}): string {
  const labels = ON_DEMAND_HELP_TASKS.filter((t) => params.taskIds.includes(t.id)).map((t) => t.label)
  const endMin = endMinutesForSlot(params.slotMinutes, params.durationHours)
  const lines = [
    `[On-demand help — ${ON_DEMAND_HELP_CITY} pilot /on-demand-help]`,
    '',
    `Locality (area): ${params.area}`,
    `Apartment / society / layout: ${params.apartmentOrSocietyName}`,
    `Flat / unit / tower: ${params.flatUnitDetails}`,
    `Tasks: ${labels.join('; ')}`,
    `Visit: ${params.serviceDate} starting ${formatMinutesAsClock(params.slotMinutes)} (${params.durationHours}h; ends ${formatMinutesAsClock(endMin)})`,
    params.landmark?.trim() ? `Landmark: ${params.landmark.trim()}` : '',
    params.notes?.trim() ? `Notes:\n${params.notes.trim()}` : '',
    '',
    'Pilot coverage: HSR Layout, Sarjapur Road, BTM Layout, Haralur, Bellandur only.',
    'Scheduling: bookings close at least 60 minutes before the chosen start time; visits run 9:00 AM–7:30 PM.',
    'Capacity: only one active visit slot is accepted at a time across this pilot.',
  ]
  return lines.filter(Boolean).join('\n')
}
