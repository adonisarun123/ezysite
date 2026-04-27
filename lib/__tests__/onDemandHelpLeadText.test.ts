import { describe, it, expect } from 'vitest'
import {
  buildOnDemandHelpSpecificRequirements,
  buildOnDemandHelpTimingSummary,
} from '../onDemandHelpLeadText'

describe('onDemandHelpLeadText', () => {
  it('buildOnDemandHelpTimingSummary includes date and duration', () => {
    const s = buildOnDemandHelpTimingSummary('2026-08-01', 10 * 60 + 30, 4)
    expect(s).toContain('2026-08-01')
    expect(s).toContain('10:30')
    expect(s).toContain('4h')
  })

  it('buildOnDemandHelpSpecificRequirements includes apartment lines', () => {
    const text = buildOnDemandHelpSpecificRequirements({
      taskIds: ['floors-sweep-mop'],
      area: 'HSR Layout',
      serviceDate: '2026-08-01',
      slotMinutes: 9 * 60,
      durationHours: 2,
      apartmentOrSocietyName: 'Test Greens',
      flatUnitDetails: 'Tower A, 402',
      landmark: 'Near park',
      notes: 'Ring bell twice',
    })
    expect(text).toContain('HSR Layout')
    expect(text).toContain('Test Greens')
    expect(text).toContain('Tower A, 402')
    expect(text).toContain('Sweep & mop floors')
    expect(text).toContain('Near park')
    expect(text).toContain('Ring bell twice')
  })
})
