"use client";

import { useState } from "react";

export default function CV() {
  const [expandEarlier, setExpandEarlier] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground py-6 md:py-12">
      <div className="container mx-auto fade-in px-4 md:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto px-2 md:px-0">
          <h1 className="text-4xl font-semibold mb-2 tracking-tight">Samarth Mamadapur</h1>
          <p className="text-xl text-muted mb-8 font-light">Data Scientist</p>

          <div className="contact-info justify-center mb-8">
            <a href="mailto:um.samarth@gmail.com" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              um.samarth@gmail.com
            </a>
            <a href="tel:+4917686659027" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +49 17686659027
            </a>
            <a
              href="https://www.linkedin.com/in/samarth-mamadapur-05b84922a"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Berlin, Germany
            </div>
          </div>

          <div className="text-base leading-relaxed max-w-2xl mx-auto text-left">
            Data Scientist at <a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="underline">Bolt</a>, one of the fastest-growing mobility companies in Europe, with 5+ years of
            experience building and deploying ML/AI solutions at scale. Previously worked on data science
            problems for some of the biggest pharmaceutical companies in the world at <a href="https://www.zs.com" target="_blank" rel="noopener noreferrer" className="underline">ZS</a>. Skilled at taking
            ambiguous business problems and deriving specific, data-driven solutions.
          </div>
        </header>

        {/* About Me */}
        <section className="section max-w-2xl mx-auto m-12 px-2 md:px-0">
          <h2 className="section-title text-center mb-4">About Me</h2>
          <div className="text-base leading-relaxed">
            <p>
              Passionate about productionizing AI systems, from computer vision to LLMs. Recently built
              and launched <a href="https://coverartist.ai" target="_blank" rel="noopener noreferrer" className="underline">CoverArtist.ai</a>, a production LLM application that chains language and diffusion
              models to generate album artwork. Enjoy communicating complex results to both technical and
              non-technical audiences while driving product and business impact.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="section max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center mb-4">Experience</h2>

          {/* Bolt */}
          <div className="job-card mb-8">
            <div className="job-header">
              <div>
                <div className="job-company"><a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">Bolt</a></div>
                <div className="job-position">Data Scientist</div>
              </div>
              <div className="job-meta">
                <div>June 2022 – Present</div>
                <div>Berlin</div>
              </div>
            </div>
            <div className="job-content">
              <ul className="job-description">
                <li>One of the earliest Data Science hires for the Micromobility vertical at a fast-growing European mobility startup.</li>
                <li>Scaled DS team and initiatives while serving millions of users across 100+ cities.</li>
              </ul>

              <div className="project-section">
                <h4 className="project-title">Pricing Optimization Strategy</h4>
                <ul className="project-details">
                  <li>Architected a multi-model (including Bayesian hierarchical) forecasting system with business-knowledge-based priors and constraints to optimize pricing across pay-as-you-go rides and subscription passes.</li>
                  <li>Achieved a significant MAPE reduction from 14.14% to 8.7% while improving causal forecasting quality.</li>
                  <li>Built robust forecasting models using a Bayesian framework, handling multiple pricing scenarios across 100+ markets, guiding vertical-wide revenue decisions.</li>
                  <li>Reduced average forecast MAPE by ~5% across all cities, leading to much higher-quality forecasts and downstream pricing decisions based on the model.</li>
                  <li>Translated an extremely ambiguous business challenge (pass vs pay-as-you-go) into a structured, data-driven solution.</li>
                  <li>Designed an experimental framework to measure price elasticities and cross-elasticities between different product offerings.</li>
                </ul>
              </div>

              <div className="project-section">
                <h4 className="project-title">Smart Collect</h4>
                <ul className="project-details">
                  <li>Led end-to-end development optimizing operational efficiency.</li>
                  <li>Defined the north-star metric (GMV per Collection Task) through stakeholder alignment.</li>
                  <li>Designed rigorous A/B testing with user-centric guardrails.</li>
                  <li>Drove a 2.7% improvement in the primary metric while maintaining user satisfaction thresholds.</li>
                  <li>Orchestrated the ML-based solution to a complex operations process end-to-end.</li>
                </ul>
              </div>

              <div className="project-section">
                <h4 className="project-title">Computer Vision Solutions</h4>
                <ul className="project-details">
                  <li>Led ParkAssist project: defined parking quality standards, coordinated labeling efforts, and fine-tuned vision models to achieve 85%+ accuracy.</li>
                  <li>Processed millions of weekly parking validations across 100+ cities, improving operational efficiency and user experience.</li>
                  <li>Achieved best-in-class parking detection models (across all scooter competitors, from public tender evaluations).</li>
                  <li>Allowed operation in new markets and helped win tenders in existing markets, indirectly resulting in millions of new rides.</li>
                  <li>Developed tandem riding detection system using a first principles approach, crucial for regulatory compliance and winning city tenders.</li>
                </ul>
              </div>

              <ul className="job-description mt-6">
                <li>Established a data-driven product development culture by operationalizing vertical-wide standard metrics for experiments and holding weekly data insights sessions with product and engineering teams to inform decision-making.</li>
              </ul>
            </div>
          </div>

          {/* CoverArtist.ai */}
          <div className="job-card mb-8">
            <div className="job-header">
              <div>
                <div className="job-company"><a href="https://coverartist.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">CoverArtist.ai</a></div>
                <div className="job-position">Founder</div>
              </div>
              <div className="job-meta">
                <div>December 2023 – Present</div>
                <div>Remote</div>
              </div>
            </div>
            <div className="job-content">
              <ul className="job-description">
                <li>Built and launched a production AI application that generates album artwork by chaining LLMs with diffusion models.</li>
                <li>Designed and implemented end-to-end system architecture, from prompt engineering to model deployment.</li>
                <li>Developed full-stack infrastructure using NextJS, handling user authentication and payment processing.</li>
                <li>Engineered robust prompt optimization and model chaining pipelines for consistent, high-quality outputs.</li>
                <li>Demonstrated ability to take an AI project from concept to monetized product, gaining hands-on experience with LLM development and deployment.</li>
              </ul>
            </div>
          </div>

          {/* Carnot Technologies */}
          <div className="job-card mb-8">
            <div className="job-header">
              <div>
                <div className="job-company"><a href="https://www.carnot.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">Carnot Technologies</a></div>
                <div className="job-position">Data Scientist</div>
              </div>
              <div className="job-meta">
                <div>October 2021 – April 2022</div>
                <div>Remote</div>
              </div>
            </div>
            <div className="job-content">
              <ul className="job-description">
                <li>Sole Data Scientist working on agri-tech solutions for a Mahindra-backed startup.</li>
                <li>Wrote production-level Python code to analyze large-scale, noisy IoT data from on-board devices (OBDs) on tractors (2Hz sampling rate) to detect fuel theft.</li>
                <li>Performed product usage analytics for an app with over 1 million registered users.</li>
              </ul>
            </div>
          </div>

          {/* Previous Experience - Toggle */}
          <div className="earlier-experience">
            <div
              className="earlier-experience-header"
              onClick={() => setExpandEarlier(!expandEarlier)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                style={{ transform: expandEarlier ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              View Earlier Experience
            </div>

            {expandEarlier && (
              <div className="earlier-experience-content">
                {/* Netcore Cloud */}
                <div className="job-card mt-5">
                  <div className="job-header">
                    <div>
                      <div className="job-company"><a href="https://netcorecloud.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Netcore Cloud</a></div>
                      <div className="job-position">Data Scientist</div>
                    </div>
                    <div className="job-meta">
                      <div>March 2020 – June 2020</div>
                      <div>Bangalore</div>
                    </div>
                  </div>
                  <div className="job-content">
                    <ul className="job-description">
                      <li>Worked on customer segmentation using clustering techniques for e-commerce activity data, improving CTR of social media ads for a major Indian e-commerce website.</li>
                      <li>Built a content recommendation system for a popular Indian (Malayalam) news outlet using pre-trained word embeddings (fastText).</li>
                    </ul>
                  </div>
                </div>

                {/* ZS */}
                <div className="job-card">
                  <div className="job-header">
                    <div>
                      <div className="job-company"><a href="https://www.zs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">ZS</a></div>
                      <div className="job-position">Data Science Associate</div>
                    </div>
                    <div className="job-meta">
                      <div>September 2018 – February 2020</div>
                      <div>Pune, Bangalore</div>
                    </div>
                  </div>
                  <div className="job-content">
                    <ul className="job-description">
                      <li>Identified distinct treatment pathways in the US immunology market to influence the standard of care for a leading pharmaceutical company:
                        <ul className="nested-list mt-2">
                          <li>Used PySpark SQL to preprocess claims data with billions of rows.</li>
                          <li>Deployed an LSTM Autoencoder to generate vector embeddings of patient journeys.</li>
                          <li>Applied K-Means clustering on these embeddings to derive and profile distinct treatment pathways.</li>
                        </ul>
                      </li>
                      <li className="mt-3">Predicted progression of Kidney Cancer by building an ensemble model (XGBoost, Random Forest, LSTM, and CNN) using patient-level claims data.</li>
                      <li>Developed an interactive Jupyter Notebook pipeline for patient-level event prediction problems, reducing preliminary analysis time by 70%:
                        <ul className="nested-list mt-2">
                          <li>Wrote a Python wrapper around parametric SQL code for efficient big-data preprocessing on Redshift.</li>
                          <li>Created a Python library for automated hyperparameter tuning with Bayesian Optimization.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="section max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center mb-6">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap">
                {[
                  "Machine Learning",
                  "LLM Engineering",
                  "Deep Learning",
                  "Computer Vision",
                  "Statistical Inference",
                  "Experiment Design / A/B Testing",
                  "Model Deployment",
                  "Full Stack Development",
                ].map((skill) => (
                  <div key={skill} className="tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap">
                {[
                  "Python",
                  "SQL",
                  "NextJS",
                  "AWS",
                  "Docker",
                  "OpenAI",
                  "Airflow",
                  "PySpark",
                ].map((tool) => (
                  <div key={tool} className="tag">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-6">Education</h2>
          <div className="education-card">
            <h3 className="text-lg font-semibold">B.E. in Electrical Engineering</h3>
            <p>M. S. Ramaiah Institute of Technology</p>
          </div>
        </section>

        {/* Footer with download/print button */}
        {/* <footer className="mt-16 flex justify-center">
          <button
            onClick={() => window.print()}
            className="print-button print:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect height="8" width="12" x="6" y="14" />
            </svg>
            Print / Save as PDF
          </button>
        </footer> */}
      </div>
    </div>
  );
}