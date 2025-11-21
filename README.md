# Lab 1 - Static Frontend with Automatic Deployment

A modern static frontend application built with React, demonstrating Git workflow, branching strategies, and continuous deployment to GitHub Pages.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Implementation Steps](#implementation-steps)
- [Branches and Commits](#branches-and-commits)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Development Guide](#development-guide)
- [Team Members](#team-members)
- [Git Concepts and Commands Guide](#git-concepts-and-commands-guide)

## 🎯 Project Overview

This project is part of a Software Engineering Lab experience focused on building a static frontend application with automatic deployment. The project demonstrates modern web development practices including:

- React.js for building user interfaces
- Git workflow and version control
- Branching strategies and collaboration
- Continuous Integration/Continuous Deployment (CI/CD) with GitHub Actions
- GitHub Pages for static site hosting

## ✨ Features

### Implemented Features

1. **Homepage**
   - Hero section with gradient background
   - Features section with three feature cards
   - About preview section
   - Fully responsive design with modern UI
   - Smooth animations and transitions

2. **Footer Component**
   - Quick links navigation
   - Resources section with external links
   - Contact information section
   - Iranian/Persian number formatting support
   - Copyright and team information

3. **Number Formatting**
   - Iranian/Persian numeral support
   - Automatic conversion of English numbers (0-9) to Persian numerals (۰-۹)
   - Used in phone numbers and year display

4. **React Router**
   - Client-side routing setup
   - Ready for additional pages (About, Contact)

5. **GitHub Actions CI/CD**
   - Automated deployment workflow
   - Automatic deployment to GitHub Pages on push to main branch

## 🛠 Technologies Used

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Client-side routing
- **React Scripts** 5.0.1 - Build tooling
- **CSS3** - Styling with modern features
- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
lab1-static-front-end/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   └── Footer.js       # Footer component
│   ├── pages/              # Page components
│   │   └── HomePage.js     # Homepage component
│   ├── styles/             # CSS stylesheets
│   │   ├── index.css       # Global styles
│   │   ├── App.css         # App component styles
│   │   ├── HomePage.css    # Homepage styles
│   │   └── Footer.css      # Footer styles
│   ├── utils/              # Utility functions
│   │   └── numberFormatter.js  # Iranian number formatter
│   ├── App.js              # Main App component
│   └── index.js            # React entry point
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Implementation Steps

### Phase 1: Project Setup
1. Initialized React project structure
2. Created `package.json` with dependencies
3. Set up `.gitignore` file
4. Configured project directory structure

### Phase 2: Application Structure
1. Created React entry point (`src/index.js`)
2. Set up main App component with React Router
3. Created base CSS styles
4. Configured HTML template

### Phase 3: Component Development
1. **Homepage Implementation**
   - Hero section with call-to-action buttons
   - Features grid with three feature cards
   - About preview section
   - Responsive CSS styling

2. **Footer Component**
   - Three-column layout
   - Quick links section
   - Resources section
   - Contact information
   - Copyright display with Iranian year format

### Phase 4: Feature Enhancements
1. **Iranian Number Formatting**
   - Created utility function for number conversion
   - Integrated Persian numerals in Footer
   - Applied to phone numbers and year display

### Phase 5: CI/CD Setup
1. Configured GitHub Actions workflow
2. Set up automatic deployment to GitHub Pages
3. Tested deployment pipeline

## 🌿 Branches and Commits

### Branching Strategy

The project follows a feature-based branching strategy:

- **`main`** - Production-ready code, protected branch
- **`feature/homepage-setup-footer`** - Homepage and Footer implementation
- **`feature/new-features`** - Iranian number formatting feature
- **`feature/auto-deploy-github-pages`** - CI/CD deployment setup
- **`feature/about-us-page`** - About Us page implementation
- **`feature/contact-page`** - Contact page implementation

### Meaningful Commits

The project contains over 20 meaningful commits, including:

- `feat: initialize React project with dependencies and gitignore`
- `feat: set up React application structure with routing and base styles`
- `feat: implement homepage component with hero section and features`
- `feat: implement footer component with links and contact information`
- `feat: add Iranian number format support for phone and year in footer`
- `feat: add contact page`
- `feat: implement about us page`
- `feat: add deploy.yml` (GitHub Actions workflow)
- `chore: add package-lock.json for dependency locking`

### Conflict Resolution

The project involved resolving merge conflicts during:
- Integration of multiple feature branches
- Merging Contact and About pages into main
- CI/CD workflow integration

## 🌐 GitHub Pages Deployment

### Deployment URL

The application is automatically deployed to GitHub Pages:
```
https://SE-Lab-Fall-1404.github.io/lab1-static-front-end
```

### Deployment Process

1. **Automatic Deployment**
   - Triggered on push to `main` branch
   - GitHub Actions workflow builds the project
   - Deploys to GitHub Pages automatically

2. **Manual Deployment**
   ```bash
   npm run build
   # Deploy build folder to GitHub Pages
   ```

## 💻 Development Guide

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/SE-Lab-Fall-1404/lab1-static-front-end.git

# Navigate to project directory
cd lab1-static-front-end

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Running Tests

```bash
npm test
```

## 👥 Team Members

- **Aryan Ansarri** - Homepage, Footer, Iranian Number Formatting
- **HamedSY** - Contact Page, About Us Page, CI/CD Setup
- Additional team members as per project requirements

## 📚 Git Concepts and Commands Guide

### 📁 What is the .git folder?

The **.git folder** is the hidden directory that forms the core of a Git repository. It contains all metadata and object database necessary for version control management.

#### Information stored in .git:
- Object database (commits, trees, blobs, tags)
- References (branches, tags, HEAD)
- Configuration files (config)
- Hook scripts
- Staging area information
- Logs and reflogs

#### Command to create:
```bash
git init
```

### ⚛️ Atomicity in Git

#### Atomic Commit:
A commit that represents a single, complete change that:
- Either completes entirely
- Or doesn't happen at all
- Has no partial or broken states

#### Atomic Pull-Request:
A pull request where:
- All commits related to a feature are collected in one PR
- Either the entire feature is accepted
- Or it is rejected
- Prevents merging only part of the changes

### 🔄 Git Fetch vs Pull vs Merge vs Rebase vs Cherry-pick

| Command           | Purpose                               | Usage               |
|-------------------|---------------------------------------|---------------------|
| **`fetch`**       | Downloads changes from remote without merging     | `git fetch origin`              |
| **`pull`**        | Fetch + merge (automatic integration)             | `git pull origin main`          |
| **`merge`**       | Combines branches while preserving commit history | `git merge feature-branch`.     |
| **`rebase`**      | Moves commits to new base, rewrites history       | `git rebase main`.              |
| **`cherry-pick`** | Applies specific commits to current branch.       | `git cherry-pick <commit-hash>` |

### 🔧 Git Reset vs Revert vs Restore vs Switch vs Checkout

| Command       | Purpose                               | Effect           |
|---------------|---------------------------------------|------------------|
| **`reset`**   | Moves HEAD and branch pointer         | Can modify history |
| **`revert`**  | Creates new commit that undoes changes| Safe, doesn't modify history |
| **`restore`** | Restores files in working directory   | Newer, safer alternative to some checkout uses |
| **`switch`**  | Switches between branches             | Modern branch switching |
| **`checkout`**| Switches branches or restores files   | Legacy multi-purpose command |

### 📋 Staging Area and Stash

#### Stage (Index):
- Intermediate area between working directory and repository
- Where changes are prepared before committing
- Controlled with `git add` and `git reset`

#### Stash Command:
- Temporarily shelves changes
- Allows switching branches without committing
- Useful for context switching

```bash
git stash        # Save changes temporarily
git stash pop    # Restore stashed changes
```

### 📸 Snapshot Concept

#### What is a Snapshot?
A snapshot represents the complete state of your project at a specific point in time.

#### Relationship with Commit:
- Each **commit** is a **snapshot** of the entire project
- Git stores the complete state of all files, not just differences
- Commits point to tree objects that represent the directory structure
- This enables efficient branching and merging

### 🌐 Local vs Remote Repository

| Aspect      | Local Repository       | Remote Repository                 |
|-------------|------------------------|-----------------------------------|
| **Location**| On developer's machine | On remote server (GitHub, GitLab, etc.) |
| **Access**  | Direct file system access| Network access required |
| **Purpose** | Development and commits | Collaboration and backup |
| **Commands**| `commit`, `branch`, `checkout` | `push`, `pull`, `fetch`, `clone` |
| **Branches**| All branches visible   | Only published branches visible to others |

#### Common Remote Commands:
```bash
git clone <url>          # Copy remote repository locally
git push origin main     # Send local commits to remote
git pull origin main     # Get remote changes and merge
git remote -v           # View remote connections
```

## 📝 Additional Notes

- **Main Branch Protection**: The main branch is protected and only accepts merges through pull requests
- **Meaningful Branches**: At least three meaningful branches were created for feature development
- **Meaningful Commits**: Over 20 meaningful commits were made throughout the project
- **Conflict Resolution**: Multiple merge conflicts were resolved during development
- **Continuous Deployment**: Automatic deployment is configured via GitHub Actions

## 📄 License

This project is created for educational purposes as part of Software Engineering Lab coursework.

## 🔗 Links

- [Repository](https://github.com/SE-Lab-Fall-1404/lab1-static-front-end)
- [GitHub Pages](https://SE-Lab-Fall-1404.github.io/lab1-static-front-end)
- [React Documentation](https://reactjs.org)
- [GitHub Actions](https://github.com/features/actions)

---

**Last Updated**: November 2024

