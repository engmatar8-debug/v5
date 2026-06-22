import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Star, BookOpen } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const courses = [
  {
    title: 'Artificial Intelligence Fundamentals',
    category: 'AI',
    level: 'Beginner',
    hours: 12,
    students: 2840,
    rating: 4.9,
    isFree: true,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#147BFF',
  },
  {
    title: 'Machine Learning Essentials',
    category: 'ML',
    level: 'Intermediate',
    hours: 20,
    students: 1620,
    rating: 4.8,
    isFree: false,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#00C6FF',
  },
  {
    title: 'Data Analytics with Power BI',
    category: 'Data',
    level: 'Beginner',
    hours: 16,
    students: 3210,
    rating: 4.9,
    isFree: false,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#11998E',
  },
  {
    title: 'Cybersecurity Foundations',
    category: 'Security',
    level: 'Beginner',
    hours: 14,
    students: 1980,
    rating: 4.7,
    isFree: true,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#FF416C',
  },
];

export default function AcademyPreviewSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,77,0.15) 0%, transparent 100%)' }} />
      </div>

      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="section-label mb-3 block">
                <span className="w-8 h-px bg-brand-primary inline-block" />
                {t.academy.label}
              </span>
              <h2 className="section-title">{t.academy.title}</h2>
              <p className="section-desc mt-3 max-w-lg">{t.academy.desc}</p>
            </div>
            <Link to="/academy" className="btn-secondary whitespace-nowrap flex-shrink-0">
              {t.academy.viewAll}
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Type filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-3 mb-8 flex-wrap">
            {[t.academy.free, t.academy.premium, t.academy.certified].map((type, i) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  i === 0
                    ? 'bg-brand-primary/15 text-brand-primary border border-brand-primary/30'
                    : 'glass text-brand-textMuted hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <ScrollReveal key={course.title} delay={i * 0.07}>
              <div className="card p-0 overflow-hidden group cursor-pointer">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/90 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className="tag text-xs"
                      style={{ background: `${course.color}20`, borderColor: `${course.color}40`, color: course.color }}
                    >
                      {course.category}
                    </span>
                    {course.isFree && <span className="tag-accent text-xs">Free</span>}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-white/60 bg-black/30 backdrop-blur-sm rounded px-2 py-0.5">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-brand-textMuted mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{course.hours}h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={12} fill="currentColor" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <Link
                    to="/academy"
                    className="btn-primary w-full justify-center text-xs py-2"
                    style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}BB)` }}
                  >
                    <BookOpen size={13} />
                    {t.academy.enroll}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
