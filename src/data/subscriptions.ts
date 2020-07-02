import { gql } from "apollo-boost"

export const TEAM_SUBSCRIPTION: any = gql`
	subscription newTeam {
		newTeam {
			id
			name
		}
	}
`
