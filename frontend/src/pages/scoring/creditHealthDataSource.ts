export function resolveDatabaseApplicationNo(
  searchParams: URLSearchParams,
  isFILSCORE SMERoute: boolean,
  selectedApplicationNo: string,
): string {
  const applicationNo = searchParams.get('applicationNo')?.trim() || ''
  if (applicationNo) return applicationNo

  const profileId = searchParams.get('profileId')?.trim() || ''
  if (isFILSCORE SMERoute) return profileId
  return profileId ? '' : selectedApplicationNo
}

export function allowsLocalBuildProfile(isFILSCORE SMERoute: boolean): boolean {
  return !isFILSCORE SMERoute
}
