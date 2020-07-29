import { gql } from 'apollo-boost'

// TODO: CHECK IF VALUES RETURNED FORM MUTATIONS ARE
//       USED IF NOT REMOVE AND LEAVE ONLY ID FIELDS

export const UPDATE_EVENT_SETTINGS: any = gql`
  mutation updateEventSettings($eventId: Int!, $isLocked: Boolean!, $isArchived: Boolean!) {
    updateEventSettings(
      eventId: $eventId
      input: { isLocked: $isLocked, isArchived: $isArchived }
    ) {
      id
      name
    }
  }
`

export const CREATE_STREAM: any = gql`
  mutation createStream($userId: Int!, $title: String!, $summary: String!, $duration: String!) {
    createStream(
      userId: $userId
      input: { title: $title, duration: $duration, summary: $summary }
    ) {
      id
    }
  }
`

//RENAME TO UPDATE_MODALS
export const UPDATE_SETTINGS: any = gql`
  mutation updateEventModals(
    $eventId: Int!
    $settingsId: Int!
    $welcomeEventInstruction: Boolean!
    $welcomeMeetupGroup: Boolean!
    $invitationInstruction: Boolean!
    $eventTheme: String
    $teamInstruction: Boolean!
  ) {
    updateEventModals(
      eventId: $eventId
      id: $settingsId
      input: {
        showTeamInstruction: $teamInstruction
        showWelcomeMeetupGroup: $welcomeMeetupGroup
        showInvitationInstruction: $invitationInstruction
        showWelcomeEventInstruction: $welcomeEventInstruction
        eventThemeColour: $eventTheme
      }
    ) {
      id
    }
  }
`

export const DELETE_REMINDER: any = gql`
  mutation deleteReminder($id: Int!) {
    deleteReminder(id: $id)
  }
`

export const DELETE_NOTE: any = gql`
  mutation deleteNote($id: Int!) {
    deleteNote(Id: $id)
  }
`

export const CREATE_NOTE: any = gql`
  mutation createNote($title: String!, $content: String!, $talkId: Int!) {
    createNote(input: { title: $title, content: $content }, talkId: $talkId) {
      title
    }
  }
`

export const CREATE_REMINDER: any = gql`
  mutation createReminder($userId: Int!, $name: String!, $from: String!, $due: String!) {
    createReminder(userId: $userId, input: { name: $name, from: $from, due: $due }) {
      name
    }
  }
`

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, password: $password, email: $email }) {
      token
      id
      expiredAt
      user {
        name
        id
      }
    }
  }
`

const CREATE_EVENT = gql`
  mutation createEvent(
    $UserID: Int!
    $name: String!
    $Email: String!
    $eventType: String!
    $summary: String!
    $alias: String!
    $description: String!
    $venue: String!
    $website: String!
    $EventDate: [String]!
    $isArchived: Boolean!
    $isLocked: Boolean!
    $mediaLinks: [String!]
    $isAcceptingTalks: Boolean!
    $isAcceptingVolunteers: Boolean!
    $isVirtual: Boolean!
  ) {
    createEvent(
      UserID: $UserID
      input: {
        name: $name
        Email: $Email
        website: $website
        alias: $alias
        description: $description
        venue: $venue
        eventType: $eventType
        mediaLinks: $mediaLinks
        summary: $summary
        isVirtual: $isVirtual
        EventDate: $EventDate
        isArchived: $isArchived
        isLocked: $isLocked
        isAcceptingTalks: $isAcceptingTalks
        isAcceptingVolunteers: $isAcceptingVolunteers #
      }
    ) {
      name
      id
      summary
      description
      alias
      website
      Email
      EventDate
      bucketLink
    }
  }
`

const UPDATE_EVENT = gql`
  mutation updateEvent(
    $id: ID!
    $name: String
    $Email: String
    $eventType: String
    $summary: String
    $alias: String
    $description: String
    $EventDate: [String]
    $venue: String
    $website: String
    $speakerConduct: String
    $isVirtual: Boolean
    $mediaLinks: [String!]
    $isAcceptingTalks: Boolean
    $isAcceptingVolunteers: Boolean
    $isAcceptingAttendees: Boolean
    $isLocked: Boolean
    $isArchived: Boolean
  ) {
    updateEvent(
      id: $id
      input: {
        name: $name
        Email: $Email
        website: $website
        alias: $alias
        description: $description
        venue: $venue
        mediaLinks: $mediaLinks
        eventType: $eventType
        summary: $summary
        speakerConduct: $speakerConduct
        EventDate: $EventDate
        isVirtual: $isVirtual
        isAcceptingAttendees: $isAcceptingAttendees
        isAcceptingTalks: $isAcceptingTalks
        isAcceptingVolunteers: $isAcceptingVolunteers
        isLocked: $isLocked
        isArchived: $isArchived
      }
    ) {
      name
    }
  }
`

const CREATE_TEAM = gql`
  mutation createTeam($EventID: Int!, $name: String!, $goal: String!) {
    createTeam(EventID: $EventID, input: { name: $name, goal: $goal }) {
      name
      goal
    }
  }
`

const CREATE_TASK = gql`
  mutation createTask(
    $teamId: Int!
    $userId: Int!
    $name: String!
    $category: String!
    $status: String!
    $priority: String!
  ) {
    createTask(
      teamId: $teamId
      userId: $userId
      input: {
        name: $name
        category: $category
        status: $status
        priority: $priority
        team_id: $teamId
      }
    ) {
      id
    }
  }
`

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      token
      id
      expiredAt
      user {
        name
        id
      }
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser($id: ID, $name: String, $email: String, $password: String, $ImgUrl: String) {
    updateUser(
      id: $id
      input: { name: $name, password: $password, email: $email, img_uri: $ImgUrl }
    ) {
      name
      email
    }
  }
`

const CREATE_TRACK: any = gql`
  mutation createTrack(
    $EventID: Int!
    $totalTalks: Int!
    $name: String!
    $duration: String!
    $summary: String!
    $isCompleted: Boolean!
    $Archived: Boolean!
  ) {
    createTrack(
      EventID: $EventID
      input: {
        totalTalks: $totalTalks
        name: $name
        summary: $summary
        duration: $duration
        isCompleted: $isCompleted
        Archived: $Archived
      }
    ) {
      id
    }
  }
`

const VOLUNTEER: any = gql`
  mutation createVolunteer(
    $UserID: Int!
    $EventID: Int!
    $Role: String!
    $Duration: String
    $Proposal: String!
  ) {
    createVolunteer(
      UserID: $UserID
      EventID: $EventID
      input: { role: $Role, duration: $Duration, volunteer_proposal: $Proposal }
    ) {
      role
      id
    }
  }
`

const ATTEND_EVENT: any = gql`
  mutation createAttendee($UserId: ID!, $EventId: ID!) {
    attendEvent(UserID: $UserId, EventID: $EventId) {
      dateJoined
    }
  }
`

const UPLOAD_EVENT_FILE: any = gql`
  mutation upload(
    $file: Upload!
    $BucketName: String!
    $Type: String!
    $EventId: Int
    $UserId: Int
  ) {
    uploadSingleEventFile(
      BucketName: $BucketName
      req: { file: $file, eventId: $EventId, type: $Type, userId: $UserId }
    ) {
      id
    }
  }
`

const UPLOAD_USER_FILE: any = gql`
  mutation upload($file: Upload!, $BucketName: String!, $Type: String!, $UserId: Int) {
    uploadSingleUserFile(
      BucketName: $BucketName
      req: { file: $file, type: $Type, userId: $UserId }
    ) {
      id
      file_uri
    }
  }
`

const CREATE_CART_CATEGORY: any = gql`
  mutation createCategory($Name: String!, $EventId: Int!) {
    createCategory(EventID: $EventId, input: { name: $Name }) {
      name
      id
    }
  }
`

const ADD_ITEM_INTO_CART = gql`
  mutation createCartItem(
    $name: String!
    $CategoryId: Int!
    $price: String
    $quantity: Int!
    $description: String!
    $isFree: Boolean!
  ) {
    createCartItem(
      input: {
        name: $name
        isFree: $isFree
        description: $description
        quantity: $quantity
        price: $price
      }
      CategoryId: $CategoryId
    ) {
      id
    }
  }
`

const CREATE_TALK = gql`
  mutation createTalk(
    $userId: Int!
    $title: String!
    $description: String!
    $archived: Boolean!
    $duration: String!
    $summary: String!
  ) {
    createTalk(
      UserID: $userId
      input: {
        title: $title
        description: $description
        Archived: $archived
        duration: $duration
        summary: $summary
      }
    ) {
      id
    }
  }
`

const SUMBIT_TALK = gql`
  mutation submitEventTalk($talkId: Int!, $eventId: Int!, $isAccepted: Boolean!) {
    submitEventTalk(talkId: $talkId, eventId: $eventId, input: { isAccepted: $isAccepted }) {
      id
    }
  }
`

const CREATE_MEETUP_GROUP: any = gql`
  mutation createMeetupGroup(
    $leadId: Int!
    $eventId: Int!
    $name: String!
    $website: String
    $email: String!
    $description: String!
    $alias: String!
    $location: String!
    $mediaLinks: [String]
  ) {
    createMeetupGroup(
      leadId: $leadId
      eventId: $eventId
      input: {
        name: $name
        email: $email
        website: $website
        mediaLinks: $mediaLinks
        description: $description
        alias: $alias
        location: $location
      }
    ) {
      id
    }
  }
`

const DELETE_EVENT: any = gql`
  mutation deleteEvent($eventId: ID!) {
    deleteEvent(id: $eventId)
  }
`

const DELETE_TALK: any = gql`
  mutation deleteTalk($talkId: ID!) {
    deleteTalk(id: $talkId)
  }
`

const DELETE_TEAM: any = gql`
  mutation deleteTeam($teamId: ID!) {
    deleteTeam(id: $teamId)
  }
`

const REVIEW_TALK: any = gql`
  mutation updateSubmittedTalk(
    $talkId: Int!
    $reviewerId: Int!
    $isAccepted: Boolean!
    $comment: String
  ) {
    updateSubmittedTalk(
      talkId: $talkId
      reviewerId: $reviewerId
      input: { isAccepted: $isAccepted, comment: $comment }
    ) {
      isAccepted
    }
  }
`

export const ADD_EVENT_SPONSOR: any = gql`
  mutation createSponsor(
    $eventID: Int!
    $name: String!
    $isOrganization: Boolean!
    $type: String!
  ) {
    createSponsor(
      eventID: $eventID
      input: { name: $name, type: $type, isOrganization: $isOrganization }
    ) {
      id
    }
  }
`

export const CREATE_BUG_REPORT = gql`
  mutation CreateBugReport(
    $userId: Int!
    $eventId: Int!
    $title: String!
    $status: String!
    $description: String!
  ) {
    createBugReport(
      userId: $userId
      eventId: $eventId
      input: { title: $title, description: $description, status: $status }
    ) {
      id
    }
  }
`

export const CREATE_FEATURE_REQUEST = gql`
  mutation createFeatureRequest(
    $userId: Int!
    $eventId: Int!
    $title: String!
    $description: String!
  ) {
    createFeatureRequest(
      userId: $userId
      eventId: $eventId
      input: { title: $title, description: $description }
    ) {
      id
    }
  }
`

export {
  DELETE_EVENT,
  REVIEW_TALK,
  DELETE_TALK,
  DELETE_TEAM,
  CREATE_TALK,
  SUMBIT_TALK,
  CREATE_MEETUP_GROUP,
  ADD_ITEM_INTO_CART,
  CREATE_CART_CATEGORY,
  UPLOAD_EVENT_FILE,
  UPLOAD_USER_FILE,
  CREATE_EVENT,
  UPDATE_USER,
  CREATE_TASK,
  VOLUNTEER,
  UPDATE_EVENT,
  CREATE_TEAM,
  CREATE_USER,
  CREATE_TRACK,
  ATTEND_EVENT,
  LOGIN_USER
}
