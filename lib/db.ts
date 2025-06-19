export const dbConfig = {
  // Database name used across the application
  dbName: 'proliink',
  
  // Collection names
  collections: {
    contacts: 'contacts',
  },
  
  // Connection options for both local and Atlas
  options: {
    connectTimeoutMS: 10000,
    retryWrites: true,
    maxPoolSize: 10
  }
}

// Function to get the correct MongoDB URI based on environment
export function getMongoURI(): string {
  // If MONGODB_URI is provided (like in production or when using Atlas), use it
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI
  }

  // For local development, construct the local URI
  const localURI = `mongodb://localhost:27017/${dbConfig.dbName}`
  return localURI
}

// Function to determine if we're using local or Atlas connection
export function isLocalConnection(uri: string): boolean {
  return uri.includes('localhost') || uri.includes('127.0.0.1')
} 