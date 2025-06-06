import { MongoClient } from 'mongodb'

// In production, use MONGODB_URI from environment variables
// In development, fallback to local MongoDB if no URI is provided
const MONGODB_URI = process.env.NODE_ENV === 'production'
  ? process.env.MONGODB_URI
  : (process.env.MONGODB_URI || 'mongodb://localhost:27017/proliink')

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

const options = {
  connectTimeoutMS: 10000, // Timeout after 10 seconds
  retryWrites: true
}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options)
    globalWithMongo._mongoClientPromise = client.connect()
      .catch(err => {
        console.error('Failed to connect to MongoDB:', err)
        throw err
      })
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, options)
  clientPromise = client.connect()
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err)
      throw err
    })
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise 