import { gql } from 'apollo-boost'

export const GET_USER_REMINDERS: any = gql`
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      reminders {
        name
        from
        due
        id
      }
    }
  }
`

const USERS: any = gql`
  query users {
    users {
      id
      name
      email
      password
      bucketLink
      createdAt
    }
  }
`

const GET_USER: any = gql`
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      name
      email
      img_uri
      bucketName
      events {
        author_id
        id
        name
        eventType
        venue
        alias
        isVirtual
        dateCreated
        summary
        description
        createdBy {
          name
          id
        }
        meetupGroups {
          id
        }
      }
      streams {
        id
        title
        duration
        summary
        createdAt
      }
      volunteering {
        role
        id
        duration
        event {
          author_id
          venue
          eventType
          id
          name
        }
      }
      attending {
        id
        user {
          name
        }
      }
    }
  }
`

export const GET_STREAM: any = gql`
  query get_stream($id: Int!) {
    stream(id: $id) {
      id
      title
      duration
      summary
      createdAt
      createdBy {
        name
        email
      }
    }
  }
`

const GET_USER_DETAIL: any = gql`
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      name
      email
      img_uri
    }
  }
`

const GET_USER_TALKS: any = gql`
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      talks {
        id
        title
        summary
        createdAt
        updatedAt
      }
    }
  }
`

const GET_USER_EVENTS: any = gql`
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      events {
        id
        name
        venue
      }
    }
  }
`

const GET_EVENT_TALKS: any = gql`
  query GET_EVENT_TALKS($id: Int!, $name: String!) {
    event(id: $id, name: $name) {
      name
      id
      createdAt
      isAcceptingTalks
      speakerConduct
      tracks {
        id
        name
        summary
        duration
        talks {
          id
          title
          speaker {
            id
            name
          }
        }
      }
    }
  }
`

const GET_EVENT: any = gql`
  query GET_EVENT($id: Int!, $name: String!) {
    event(id: $id, name: $name) {
      name
      id
      venue
      description
      summary
      Email
      website
      dateCreated
      bucketName
      alias
      isLocked
      isArchived
      isAcceptingTalks
      isAcceptingVolunteers
      isAcceptingAttendees
      isVirtual
      confirmedEmail
      speakerConduct
      eventType
      mediaLinks
      actions
      EventDate
      mobileOnboarding
      marketplaceOnboarding
      teamsOnboarding
      scheduleOnboarding
      invitationsOnboarding
      settings {
        id
        showTeamInstruction
        showWelcomeMeetupGroup
        showInvitationInstruction
        showWelcomeEventInstruction
        eventThemeColour
      }
      sponsors {
        id
        name
        isOrganization
      }
      createdBy {
        name
        email
        id
      }
      teams {
        id
        name
        createdAt
        goal
        tasks {
          id
        }
      }
      tracks {
        id
        name
        summary
        duration
      }
      volunteer {
        role
        id
        approvalStatus
        volunteer_proposal
        dateApplied
        user {
          name
        }
      }
      attendees {
        dateJoined
        user {
          name
          email
        }
      }
      cart_items_category {
        name
        id
      }
      meetupGroups {
        name
        id
        summary
        createdAt
        location
        alias
      }
    }
  }
`

export const GET_EVENT_ATTENDEES: any = gql`
  query GET_EVENT($id: Int!, $name: String!) {
    event(id: $id, name: $name) {
      attendees {
        dateJoined
        user {
          name
          email
        }
      }
    }
  }
`

const EVENTS: any = gql`
  query events {
    events {
      id
      name
      summary
      EventDate
      createdBy {
        id
        name
      }
      isArchived
      isLocked
      Email
      venue
      eventType
      description
      meetupGroups {
        id
      }
    }
  }
`

const TEAMS: any = gql`
  query Teams {
    teams {
      id
      name
    }
  }
`

const TEAM: any = gql`
  query team($id: Int!, $name: String!) {
    team(id: $id, name: $name) {
      id
      name
      goal
      createdAt
      createdBy {
        name
      }
      event {
        name
      }
      members {
        name
        id
      }
      tasks {
        id

        name
        category
        status
        createdAt
        createdBy {
          id
          name
        }
      }
    }
  }
`

const TRACKS: any = gql`
  query Track {
    tracks {
      name
      id
    }
  }
`

const GET_TALK: any = gql`
  query talk($id: Int!) {
    talk(id: $id) {
      id
      title
      summary
      description
      tags
      createdAt
      duration
      talkCoverUri
      Archived
      notes {
        id
        title
        content
      }
    }
  }
`

export const GET_USER_NOTES: any = gql`
  query talk($id: Int!) {
    talk(id: $id) {
      notes {
        id
        title
        content
      }
    }
  }
`

const TALKS: any = gql`
  query talk {
    talks(Limit: 5) {
      title
      id
      Archived
      description
      summary
      speaker {
        name
      }
    }
  }
`

const GET_VOLUNTEERS: any = gql`
  query get_volunteers($eventId: Int!) {
    volunteers(EventID: $eventId) {
      role
      approvalStatus
      duration
      volunteer_proposal
      dateApplied
      user {
        name
      }
    }
  }
`

const GET_CART_ITEM = gql`
  query cartItems($categoryId: Int!) {
    cartItems(categoryId: $categoryId) {
      id
      name
      isFree
      quantity
      price
      description
    }
  }
`

const GET_ALL_EVENT_CART_ITEMS = gql`
  query allCartItems($Limit: Int) {
    allCartItems(Limit: $Limit) {
      id
      name
      isFree
      quantity
      price
      description
    }
  }
`

const GET_CATEGORY = gql`
  query categoryitems($id: Int!) {
    category(id: $id) {
      items {
        id
        name
        isFree
        quantity
        price
        description
      }
    }
  }
`

const GET_EVENT_TALK = gql`
  query GET_EVENT($eventId: Int!, $name: String!) {
    event(id: $eventId, name: $name) {
      talk {
        id
        dateSubmitted
        isAccepted
        draft {
          id
          title
          duration
          summary
          description
          speaker {
            id
            name
            email
          }
        }
      }
      tracks {
        id
        name
        summary
        duration
      }
    }
  }
`

const GET_EVENT_MEETUP_GROUP: any = gql`
  query getMeetupGroup($id: Int!) {
    getMeetupGroup(id: $id) {
      id
      name
      description
      createdAt
      summary
      mediaLinks
      location
      alias
      event {
        id
        eventType
        alias
        name
        actions
      }
    }
  }
`

const GET_TASK: any = gql`
  query get_task($id: Int!) {
    task(id: $id) {
      id
      name
      category
      status
      createdAt
      comment_id
      author_id
      team_id
    }
  }
`

export {
  GET_TASK,
  GET_EVENT_TALK,
  GET_USER_TALKS,
  GET_CATEGORY,
  TEAMS,
  GET_ALL_EVENT_CART_ITEMS,
  GET_CART_ITEM,
  GET_USER_DETAIL,
  GET_EVENT_MEETUP_GROUP,
  GET_EVENT_TALKS,
  GET_USER_EVENTS,
  GET_TALK,
  GET_VOLUNTEERS,
  GET_USER,
  USERS,
  TALKS,
  TEAM,
  TRACKS,
  EVENTS,
  GET_EVENT
}
