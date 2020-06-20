# Oasis User Console

<p> Oasis User Management console created with `Create-React-App` </p>

<p> Currently under active development. A better readme would be written soon </p>

<!-- curl localhost:4040/query   -F operations='{ "query": "mutation ($req: UploadFile!) { uploadSingleFile(req: $req) { timestamp, file_uri } }", "variables": { "req": {"file": null, "file_uri": "https://google.com" } } }'   -F map='{ "0": ["variables.req.file"] }'   -F 0=@./src/assets/images
 -->

 <!--  type File {
    id: ID!
    file: Upload!
    file_uri: String!
    timestamp: Time!
}

input UploadFile {
    file: Upload!
    file_uri: String!
}

input DeleteFile {
    id: ID!
    uri: String
} -->
