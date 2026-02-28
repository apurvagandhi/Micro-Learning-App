import { useRef, useState } from 'react';
import styles from '../styles/AdminDashboard.module.css';

export default function ContributorDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [analyticsOpenFor, setAnalyticsOpenFor] = useState(null);
  const [lastSavedAt, setLastSavedAt] = useState('');
  const [tagInput, setTagInput] = useState('');
  const createSectionRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    estimatedDays: '0',
    estimatedHours: '0',
    estimatedMinutes: '0',
    lessonText: '',
  });
  const [uploads, setUploads] = useState({
    audioFile: null,
    imageFiles: [],
    videoFiles: [],
  });
  const createOptions = [
    {
      id: 'text',
      title: 'Text Content',
      helper: 'Create a new text lesson',
    },
    {
      id: 'audio',
      title: 'Audio Content',
      helper: 'Create a new audio lesson',
    },
    {
      id: 'visual',
      title: 'Visual Content',
      helper: 'Create a new visual lesson',
    },
  ];

  const selectedOption = createOptions.find((option) => option.id === selectedType);
  const wordCount = formData.lessonText.trim()
    ? formData.lessonText.trim().split(/\s+/).length
    : 0;
  const dayOptions = Array.from({ length: 31 }, (_, index) => index);
  const hourOptions = Array.from({ length: 24 }, (_, index) => index);
  const minuteOptions = Array.from({ length: 60 }, (_, index) => index);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      tags: [],
      estimatedDays: '0',
      estimatedHours: '0',
      estimatedMinutes: '0',
      lessonText: '',
    });
    setTagInput('');
    setUploads({
      audioFile: null,
      imageFiles: [],
      videoFiles: [],
    });
    setLastSavedAt('');
  };

  const getCourseAnalytics = (courseId) =>
    courses.find((course) => course.id === courseId)?.analytics || {
      views: 0,
      completions: 0,
      rating: 'No ratings yet',
    };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectType = (type) => {
    setEditingCourseId(null);
    setSelectedType(type);
    resetForm();
  };

  const handleEditCourse = (course) => {
    const fallbackTypeId =
      course.type === 'Audio Content' ? 'audio' : course.type === 'Visual Content' ? 'visual' : 'text';

    setEditingCourseId(course.id);
    setSelectedType(course.typeId || fallbackTypeId);
    setFormData({
      title: course.title || '',
      description: course.description || '',
      tags: course.tags || [],
      estimatedDays: course.estimatedDays || '0',
      estimatedHours: course.estimatedHours || '0',
      estimatedMinutes: course.estimatedMinutes || '0',
      lessonText: course.content?.lessonText || '',
    });
    setTagInput('');
    setUploads({
      audioFile: course.content?.audioFile || null,
      imageFiles: course.content?.imageFiles || [],
      videoFiles: course.content?.videoFiles || [],
    });
    setLastSavedAt('');
    createSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAudioChange = (event) => {
    const [file] = event.target.files || [];
    setUploads((prev) => ({
      ...prev,
      audioFile: file || null,
    }));
  };

  const handleVisualChange = (event, key) => {
    const files = Array.from(event.target.files || []);
    setUploads((prev) => ({
      ...prev,
      [key]: files,
    }));
  };

  const handleAction = (event, action) => {
    event.preventDefault();
    const formattedEstimatedTime = `${formData.estimatedDays}d ${formData.estimatedHours}h ${formData.estimatedMinutes}m`;
    const currentTimestamp = new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });

    if (action === 'Save as Draft' && selectedOption && formData.title.trim()) {
      const existingCourse = courses.find((course) => course.id === editingCourseId);
      const payload = {
        id: editingCourseId || Date.now(),
        title: formData.title.trim(),
        description: formData.description.trim() || 'No description provided.',
        tags: formData.tags,
        estimatedDays: formData.estimatedDays,
        estimatedHours: formData.estimatedHours,
        estimatedMinutes: formData.estimatedMinutes,
        estimatedTime: formattedEstimatedTime,
        typeId: selectedOption.id,
        type: selectedOption.title,
        status: existingCourse?.status || 'pending',
        analytics: getCourseAnalytics(editingCourseId),
        content: {
          lessonText: formData.lessonText,
          audioFile: uploads.audioFile,
          imageFiles: uploads.imageFiles,
          videoFiles: uploads.videoFiles,
        },
      };

      if (editingCourseId) {
        setCourses((prev) =>
          prev.map((course) => (course.id === editingCourseId ? { ...course, ...payload } : course)),
        );
      } else {
        setCourses((prev) => [payload, ...prev]);
        setEditingCourseId(payload.id);
      }

      setLastSavedAt(currentTimestamp);
      return;
    }

    if (action === 'Submit for Review' && selectedOption && formData.title.trim()) {
      const payload = {
        id: editingCourseId || Date.now(),
        title: formData.title.trim(),
        description: formData.description.trim() || 'No description provided.',
        tags: formData.tags,
        estimatedDays: formData.estimatedDays,
        estimatedHours: formData.estimatedHours,
        estimatedMinutes: formData.estimatedMinutes,
        estimatedTime: formattedEstimatedTime,
        typeId: selectedOption.id,
        type: selectedOption.title,
        status: 'pending',
        analytics: getCourseAnalytics(editingCourseId),
        content: {
          lessonText: formData.lessonText,
          audioFile: uploads.audioFile,
          imageFiles: uploads.imageFiles,
          videoFiles: uploads.videoFiles,
        },
      };

      if (editingCourseId) {
        setCourses((prev) =>
          prev.map((course) => (course.id === editingCourseId ? { ...course, ...payload } : course)),
        );
      } else {
        setCourses((prev) => [payload, ...prev]);
      }

      setEditingCourseId(null);
      resetForm();
      return;
    }

    console.log(`${action} for ${selectedType || 'unknown'} content`, {
      ...formData,
      estimatedTime: formattedEstimatedTime,
    });
  };

  const handleCancelEdit = () => {
    setEditingCourseId(null);
    resetForm();
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleTagKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    const nextTag = tagInput.trim();
    if (!nextTag) return;

    setFormData((prev) => {
      const exists = prev.tags.some((tag) => tag.toLowerCase() === nextTag.toLowerCase());
      if (exists) return prev;
      return {
        ...prev,
        tags: [...prev.tags, nextTag],
      };
    });

    setTagInput('');
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1>Contributor Panel</h1>
        <p>Create and edit your own courses.</p>
      </header>

      <section className={styles.section}>
        <h2>Your Courses</h2>
        <p className={styles.subtitle}>Courses you have added to the platform</p>

        {courses.length === 0 ? (
          <p className={styles.emptyState}>No courses yet.</p>
        ) : (
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <article key={course.id} className={styles.courseCard}>
                <div className={styles.courseCardHeader}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <span
                    className={`${styles.statusBadge} ${
                      course.status === 'approved'
                        ? styles.statusApproved
                        : course.status === 'rejected'
                        ? styles.statusRejected
                        : styles.statusPending
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
                <p className={styles.courseDescription}>{course.description}</p>
                <p className={styles.courseMeta}>
                  {course.type} | {course.estimatedTime}
                </p>
                {course.tags.length > 0 && (
                  <div className={styles.courseTagList}>
                    {course.tags.map((tag) => (
                      <span key={`${course.id}-${tag}`} className={styles.courseTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className={styles.courseActions}>
                  <button type="button" className={styles.primaryButton} onClick={() => handleEditCourse(course)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() =>
                      setAnalyticsOpenFor((prev) => (prev === course.id ? null : course.id))
                    }
                  >
                    {analyticsOpenFor === course.id ? 'Hide Analytics' : 'View Analytics'}
                  </button>
                </div>
                {analyticsOpenFor === course.id && (
                  <div className={styles.analyticsPanel}>
                    <div className={styles.analyticsItem}>
                      <span className={styles.analyticsLabel}>Views</span>
                      <span className={styles.analyticsValue}>{course.analytics.views}</span>
                    </div>
                    <div className={styles.analyticsItem}>
                      <span className={styles.analyticsLabel}>Completions</span>
                      <span className={styles.analyticsValue}>{course.analytics.completions}</span>
                    </div>
                    <div className={styles.analyticsItem}>
                      <span className={styles.analyticsLabel}>Rating</span>
                      <span className={styles.analyticsValue}>{course.analytics.rating}</span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <section ref={createSectionRef} className={`${styles.section} ${styles.sectionSpacing}`}>
        <h2>Create Content</h2>
        <p className={styles.subtitle}>Choose a content type to create a new course item</p>

        <div className={styles.createGrid}>
          {createOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`${styles.createCard} ${selectedType === option.id ? styles.activeCreateCard : ''}`}
              onClick={() => handleSelectType(option.id)}
            >
              <span className={styles.createTitle}>{option.title}</span>
              <span className={styles.createPlus}>+</span>
              <span className={styles.createHelper}>{option.helper}</span>
            </button>
          ))}
        </div>

        {selectedOption && (
          <form className={styles.createForm} onSubmit={(event) => handleAction(event, 'Submit for Review')}>
            <h3 className={styles.createFormTitle}>
              {editingCourseId ? `Edit ${selectedOption.title}` : `New ${selectedOption.title}`}
            </h3>

            <div className={styles.configForm}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Title (required)</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleFieldChange}
                  placeholder="Enter content title"
                  className={styles.configInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Short description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFieldChange}
                  rows="4"
                  placeholder="Add a short summary (optional)"
                  className={`${styles.configInput} ${styles.textareaInput}`}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="tagsInput">Tags / topic</label>
                <div className={styles.tagsInputContainer}>
                  {formData.tags.map((tag) => (
                    <span key={tag} className={styles.tagChip}>
                      {tag}
                      <button
                        type="button"
                        className={styles.tagRemoveButton}
                        onClick={() => handleRemoveTag(tag)}
                        aria-label={`Remove tag ${tag}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    id="tagsInput"
                    type="text"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagKeyDown}
                    placeholder="Type a tag and press Enter"
                    className={styles.tagsInput}
                  />
                </div>
                <span className={styles.helpText}>Press Enter to add a tag</span>
              </div>

              <div className={styles.formGroup}>
                <label>Estimated time</label>
                <div className={styles.timeSelectors}>
                  <div className={styles.timeSelector}>
                    <label htmlFor="estimatedDays">Days</label>
                    <select
                      id="estimatedDays"
                      name="estimatedDays"
                      value={formData.estimatedDays}
                      onChange={handleFieldChange}
                      className={styles.configInput}
                    >
                      {dayOptions.map((value) => (
                        <option key={`day-${value}`} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.timeSelector}>
                    <label htmlFor="estimatedHours">Hours</label>
                    <select
                      id="estimatedHours"
                      name="estimatedHours"
                      value={formData.estimatedHours}
                      onChange={handleFieldChange}
                      className={styles.configInput}
                    >
                      {hourOptions.map((value) => (
                        <option key={`hour-${value}`} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.timeSelector}>
                    <label htmlFor="estimatedMinutes">Minutes</label>
                    <select
                      id="estimatedMinutes"
                      name="estimatedMinutes"
                      value={formData.estimatedMinutes}
                      onChange={handleFieldChange}
                      className={styles.configInput}
                    >
                      {minuteOptions.map((value) => (
                        <option key={`minute-${value}`} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {selectedType === 'text' && (
              <div className={styles.typeSpecificSection}>
                <div className={styles.formGroup}>
                  <label htmlFor="lessonText">Text content</label>
                  <textarea
                    id="lessonText"
                    name="lessonText"
                    value={formData.lessonText}
                    onChange={handleFieldChange}
                    rows="8"
                    placeholder="Write your lesson content here..."
                    className={`${styles.configInput} ${styles.lessonTextInput}`}
                  />
                  <p className={styles.wordCount}>Word count: {wordCount}</p>
                </div>
              </div>
            )}

            {selectedType === 'audio' && (
              <div className={styles.typeSpecificSection}>
                <div className={styles.formGroup}>
                  <label htmlFor="audioFile">Upload audio file</label>
                  <input
                    id="audioFile"
                    type="file"
                    accept=".mp3,.wav,.m4a,.aac,.ogg,.flac,audio/*"
                    className={styles.configInput}
                    onChange={handleAudioChange}
                  />
                  <span className={styles.helpText}>
                    Supported formats: MP3, WAV, M4A, AAC, OGG, FLAC
                  </span>
                  {uploads.audioFile && (
                    <p className={styles.uploadSummary}>Selected: {uploads.audioFile.name}</p>
                  )}
                </div>
              </div>
            )}

            {selectedType === 'visual' && (
              <div className={styles.typeSpecificSection}>
                <div className={styles.formGroup}>
                  <label htmlFor="imageFiles">Upload images</label>
                  <input
                    id="imageFiles"
                    type="file"
                    accept=".png,.jpg,.jpeg,.gif,.webp,.svg,image/*"
                    multiple
                    className={styles.configInput}
                    onChange={(event) => handleVisualChange(event, 'imageFiles')}
                  />
                  <span className={styles.helpText}>Upload one or more image files for this lesson</span>
                  {uploads.imageFiles.length > 0 && (
                    <p className={styles.uploadSummary}>
                      Selected images: {uploads.imageFiles.map((file) => file.name).join(', ')}
                    </p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="videoFiles">Upload videos</label>
                  <input
                    id="videoFiles"
                    type="file"
                    accept=".mp4,.mov,.webm,.mkv,.avi,video/*"
                    multiple
                    className={styles.configInput}
                    onChange={(event) => handleVisualChange(event, 'videoFiles')}
                  />
                  <span className={styles.helpText}>Upload one or more video files for this lesson</span>
                  {uploads.videoFiles.length > 0 && (
                    <p className={styles.uploadSummary}>
                      Selected videos: {uploads.videoFiles.map((file) => file.name).join(', ')}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className={styles.formActions}>
              {editingCourseId && (
                <button type="button" className={styles.secondaryButton} onClick={handleCancelEdit}>
                  Cancel Edit
                </button>
              )}
              <button type="button" className={styles.primaryButton} onClick={(event) => handleAction(event, 'Save as Draft')}>
                Save as Draft
              </button>
              <button type="submit" className={styles.saveButton}>
                {editingCourseId ? 'Update and Submit for Review' : 'Submit for Review'}
              </button>
            </div>
            {lastSavedAt && (
              <p className={styles.saveStatus}>Saved. Last saved at {lastSavedAt}</p>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
