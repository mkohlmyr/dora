# Metrics
 - The reason you would want the original commits is in order to establish the length of time between the first commit on the branch, versus the current time. This is the "time to change".
 - This could also be tracked outside of github by responding to all commits that are pushed, and simply figuring out the earliest and the last action on the branch. But then you need a database persisting data throughout the lifecycle of a branch. Not just a target location for the metrics.




Time to Change COULD BE: PR opened -> PR merged, excluding any PRs which have not yet been merged.
You also should remove outliers




payload.pull_request.base.repo.created_at
payload.pull_request.base.repo.pushed_at
payload.pull_request.base.repo.updated_at


payload.pull_request.closed_at <-- note no base.repo
payload.pull_request.created_at


"closed_at": "2022-03-30T12:17:50Z", <- WE MAY BE ABLE TO JUST COMPARE THESE TWO IF WE CAN'T GET THE FIRST (OR LAST???) COMMIT TIME
"created_at": "2022-03-30T12:15:49Z", <- WE MAY BE ABLE TO JUST COMPARE THESE TWO IF WE CAN'T GET THE FIRST (OR LAST???) COMMIT TIME

"pushed_at": "2022-03-30T12:17:50Z", <---- pr pushed into base repo???
"updated_at": "2022-03-29T13:45:07Z", <---- original repo...
"created_at": "2022-03-29T12:50:13Z", <---- original repo...