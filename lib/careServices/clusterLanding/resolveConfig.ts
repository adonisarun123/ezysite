import { CARE_PAGE_FILES, type CarePageFile } from '@/lib/careServices/registry'
import { CLUSTER_LANDING_CONFIGS } from '@/lib/careServices/clusterLanding/configs'
import type { CareClusterLandingConfig } from '@/lib/careServices/clusterLanding/types'

type ClusterKey = keyof typeof CLUSTER_LANDING_CONFIGS

const MARKDOWN_FILE_TO_CLUSTER: Record<CarePageFile, ClusterKey> = {
  [CARE_PAGE_FILES.pillar]: 'pillar',
  [CARE_PAGE_FILES.homeHealthcare]: 'homeHealthcare',
  [CARE_PAGE_FILES.homeNursing]: 'homeNursing',
  [CARE_PAGE_FILES.elderlyCare]: 'elderlyCare',
  [CARE_PAGE_FILES.caretaker]: 'caretaker',
  [CARE_PAGE_FILES.patientCare]: 'patientCare',
  [CARE_PAGE_FILES.homeAttendant]: 'homeAttendant',
  [CARE_PAGE_FILES.trainedAttendant]: 'trainedAttendant',
}

export function careClusterConfigForMarkdownFile(filename: CarePageFile): CareClusterLandingConfig {
  const key = MARKDOWN_FILE_TO_CLUSTER[filename]
  if (!key) {
    throw new Error(`No cluster landing config mapped for care markdown file: ${filename}`)
  }
  return CLUSTER_LANDING_CONFIGS[key]
}
