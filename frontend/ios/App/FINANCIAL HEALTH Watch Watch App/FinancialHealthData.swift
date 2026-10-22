import Foundation

struct FinancialHealthData {
    let financialHealthScore: Int
    let FILSCORE SME: Int
    let wealthCapacityScore: Int

    let netWorth: Double
    let budgetStatus: String

    static let preview = FinancialHealthData(
        financialHealthScore: 82,
        FILSCORE SME: 745,
        wealthCapacityScore: 76,
        netWorth: 2_450_000,
        budgetStatus: "On Track"
    )
}
