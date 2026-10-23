export function resolveDatabaseApplicationNo(
  searchParams: URLSearchParams,
  isFilScoreSMERoute: boolean,
  selectedApplicationNo: string,
): string {
  const applicationNo = searchParams.get('applicationNo')?.trim() || ''
  if (applicationNo) return applicationNo

  const profileId = searchParams.get('profileId')?.trim() || ''
  if (isFilScoreSMERoute) return profileId
  return profileId ? '' : selectedApplicationNo
}

export function allowsLocalBuildProfile(isFilScoreSMERoute: boolean): boolean {
  return !isFilScoreSMERoute
}
