# jasmine-rewire-react

going with jest instead, specifically 5.x with babel-jest. jasmine-react cannot actually mock imported subcompenents. Rewire goes a certain ways, but either forces using require() on all mocked imports (standard rewire) or injects all files with getters and setters (which errors on instances like export { default as whatever } from 'somewhere'). The same problem persists w/ Mocha, Chai, Sinon, an implementation I liked better anyhow.
