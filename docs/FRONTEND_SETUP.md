# Frontend Setup Guide - React + Vite

## Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm 9+** (comes with Node.js) or **pnpm/yarn**
- **Git**
- **VS Code** (recommended)
- **Windows Users**: Use Command Prompt (cmd.exe) instead of PowerShell to avoid execution policy issues

## Installation

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

This installs:
- React 19.2.0
- React DOM 19.2.0
- Vite 7.3.1 (build tool)
- ESLint 9.39.1 (linting)

### 3. Set Up Environment Variables (Optional)
Create `.env` file in `frontend/` if needed:

```env
VITE_API_URL=http://localhost:8080/api
VITE_APP_NAME=Micro-Learning App
```

Access in your React components via: `import.meta.env.VITE_API_URL`

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port)

## Development Workflow

### Available Scripts

```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Run linting
ng lint

# Format code with Prettier
npm run format

# Run unit tests
ng test

# Run e2e tests
ng e2e
```

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── common/       # Header, Footer, Navigation, etc.
│   │   │   ├── lessons/      # Lesson-related components
│   │   │   ├── auth/         # Auth components
│   │   │   └── shared/       # Shared components
│   │   ├── services/         # Services (API, state management)
│   │   │   ├── api.service.ts
│   │   │   ├── auth.service.ts
│   │   │   └── lesson.service.ts
│   │   ├── guards/           # Route guards (auth, permissions)
│   │   ├── interceptors/     # HTTP interceptors
│   │   ├── models/           # TypeScript interfaces
│   │   ├── pipes/            # Custom pipes
│   │   ├── pages/            # Page/smart components
│   │   │   ├── dashboard/
│   │   │   ├── lessons/
│   │   │   └── profile/
│   │   ├── store/            # NgRx store (optional)
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   └── selectors/
│   │   ├── app.module.ts     # Root module
│   │   ├── app-routing.module.ts
│   │   └── app.component.ts
│   ├── assets/               # Static assets (images, icons)
│   ├── environments/         # Environment configuration
│   ├── styles/               # Global styles
│   │   ├── styles.scss       # Global styles
│   │   ├── variables.scss    # SCSS variables
│   │   └── mixins.scss       # SCSS mixins
│   ├── index.html
│   └── main.ts
├── angular.json              # Angular CLI config
├── tsconfig.json             # TypeScript config
├── karma.conf.js             # Test runner config
├── package.json
├── .eslintrc.json
└── README.md
```

## Code Standards

### Component Structure (TypeScript + Angular)
```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  @Input() data: any;
  @Output() changed = new EventEmitter<any>();

  form: FormGroup;
  data$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Initialization logic
  }

  handleClick(): void {
    // Handle event
    this.changed.emit(this.form.value);
  }
}
```

**Template (HTML)**
```html
<div class="my-component">
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <mat-form-field appearance="outline">
      <mat-label>Name</mat-label>
      <input matInput formControlName="name" required>
      <mat-error *ngIf="form.get('name')?.hasError('required')">
        Name is required
      </mat-error>
    </mat-form-field>

    <button mat-raised-button color="primary" type="submit">
      Submit
    </button>
  </form>

  <div *ngIf="data$ | async as data">
    {{ data.name }}
  </div>
</div>
```

### Naming Conventions
- **Components**: PascalCase (my-component.component.ts)
- **Services**: PascalCase with .service suffix (my.service.ts)
- **Functions/Methods**: camelCase (handleClick)
- **Constants**: UPPER_SNAKE_CASE (MAX_ITEMS)
- **Properties**: camelCase with $ suffix for Observables (data$)

### Styling with Angular Material & SCSS
```scss
// Use Angular Material theming
@import '@angular/material/prebuilt-themes/indigo-pink.css';

// Global variables
$primary-color: #3f51b5;
$accent-color: #ff4081;

// Custom styles
.my-component {
  display: flex;
  gap: 1rem;
  
  mat-button {
    margin: 0.5rem;
  }
}
```

### Services (API Communication)
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = `${environment.apiUrl}/lessons`;

  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiUrl);
  }

  getLesson(id: string): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/${id}`);
  }

  createLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.apiUrl, lesson);
  }

  updateLesson(id: string, lesson: Lesson): Observable<Lesson> {
    return this.http.put<Lesson>(`${this.apiUrl}/${id}`, lesson);
  }

  deleteLesson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

## Common Tasks

### Add a New Feature Module
```bash
ng generate module features/my-feature
ng generate component features/my-feature/my-feature
```

### Add a New Service
```bash
ng generate service services/my-service
```

### Add a New Guard
```bash
ng generate guard guards/auth
```

### Create an HTTP Interceptor (for Auth Headers)
```typescript
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
```

Register in `app.module.ts`:
```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
```

## Reactive Forms vs Template-driven

### Recommended: Reactive Forms
```typescript
// More control, testable, type-safe
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
});
```

## Debugging

### VS Code Debugging
1. Install "Debugger for Chrome" extension
2. Add breakpoints in code
3. Run `ng serve`
4. Go to `chrome://inspect`

### Angular DevTools
Install [Angular DevTools](https://chrome.google.com/webstore) browser extension.

### Console & Logging
```typescript
console.log('Debug info:', data);
console.error('Error:', error);
```

## Performance Tips

1. **Change Detection**: Use OnPush strategy
2. **Code Splitting**: Use lazy loading in routing
3. **Bundling**: Angular CLI does tree-shaking automatically
4. **Image Optimization**: Use WebP with fallbacks
5. **Track by in *ngFor**: Use trackBy for lists

```typescript
// Track by function
trackByIndex(index: number): number {
  return index;
}

trackById(index: number, item: any): any {
  return item.id;
}
```

## Testing

### Unit Tests with Jasmine/Karma
```bash
ng test
```

```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Deployment

Frontend is deployed to **AWS S3 + CloudFront**:

### Build for Production
```bash
ng build --configuration production
# Output in dist/micro-learning-app/
```

### Deploy to AWS
```bash
aws s3 sync dist/micro-learning-app/ s3://your-bucket-name --delete
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed AWS deployment.

## Troubleshooting

**Port 4200 already in use:**
```bash
ng serve --port 4201
```

**Dependencies broken:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
ng lint
ng build
```

**Material not working:**
```bash
ng add @angular/material
npm install
```

---

**Need help?** Create an issue or discussion on GitHub!

