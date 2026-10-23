export function resolveDatabaseApplicationNo(
  searchParams: URLSearchParams,
  isfilscoresme SMERoute: boolean,
  selectedApplicationNo: string,
): string {
  const applicationNo = searchParams.get('applicationNo')?.trim() || ''
  if (applicationNo) return applicationNo

  const profileId = searchParams.get('profileId')?.trim() || ''
  if (isfilscoresme SMERoute) return profileId
  return profileId ? '' : selectedApplicationNo
}

export function allowsLocalBuildProfile(isfilscoresme SMERoute: boolean): boolean {
  return !isfilscoresme SMERoute
}
