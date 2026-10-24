# SkyDrop Dispatch

SkyDrop flies small parcels around Colombo by drone. This is its dispatch dashboard: the fleet, the incoming delivery requests, and the people who match one to the other.

It half works. Your team's job is to build the features in **[FEATURES.md](FEATURES.md)**, as pull requests, and leave it fully working.

## Run it

You need Node.js 20 or later.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). `npm run lint` checks your code.

## How your team works

One repository per team, one pull request per feature.

### 1. One person forks

The **team owner** opens this repository on GitHub, presses **Fork** and creates the fork under their own account.

### 2. The owner adds the team

In the fork: **Settings → Collaborators → Add people**. Add every teammate by GitHub username. Each teammate accepts the email invitation.

### 3. Everyone clones the fork

Clone **the fork**, not the original:

```bash
git clone https://github.com/<owner-username>/skydrop-dispatch.git
cd skydrop-dispatch
npm install
npm run dev
```

### 4. One branch per feature

```bash
git switch main
git pull
git switch -c f2-drone-card
```

Commit as you go, then push the branch:

```bash
git add .
git commit -m "F2: show battery and status on the drone card"
git push -u origin f2-drone-card
```

### 5. Open a pull request against the fork

On GitHub, press **Compare & pull request**.

> **Check the base.** GitHub suggests the original organisation repository as the base. Change **base repository** to the fork (`<owner-username>/skydrop-dispatch`, branch `main`). Your PR belongs to your team's fork.

Write which feature it is and how you checked it (the PR template asks for this).

### 6. Review and merge

A teammate reads the PR, runs the branch if needed, and presses **Merge**. Then everyone updates:

```bash
git switch main
git pull
```

### If two PRs touch the same file

Usually Git merges them on its own. If GitHub says there's a conflict, pull `main` into your branch, fix the marked lines together, commit and push again:

```bash
git switch f5-assign-drone
git pull origin main
# fix the lines between <<<<<<< and >>>>>>>, then
git add .
git commit -m "Merge main into f5-assign-drone"
git push
```

## Where things are

| Path | What it is |
| --- | --- |
| `src/App.jsx` | Holds the fleet and requests in state, and the functions that change them |
| `src/pages/Dashboard.jsx` | The main page layout |
| `src/components/` | FleetList, DroneCard, StatusPill, RequestBoard, RequestCard, RequestForm, Header |
| `src/pages/DronePage.jsx`, `NotFound.jsx` | Pages for F7 |
| `src/data/` | Mock drones, requests and delivery areas |

Styling is Tailwind CSS, and icons come from `lucide-react`.
