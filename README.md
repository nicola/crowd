# crowd
Crowd and reverse cloud computing

## Definition

`task`: has a solution/solutions to be found through several jobs
`jobs`: unit operation done by a client

## External API

### GET /api/task/:taskId
it getTask() and check nextJob() and deliver the code.

### GET /api/task/:taskId/next
It asks for nextJob() in the queue (or create new) and might deliver the code

### POST /api/task/:taskId/:jobId
sendSolution() send a solution of a job (that contributes to a partial solution of the task)

## Internal API

### getTask()
### HasNext()
Updates the pointer to a next job in queu (creates a new one if none)
### nextJob()
Returns the job and set the job as `IN PROGRESS`
### getSolution()
Validate and update the state of the task