import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UseCases = () => (
  <Layout>
    <Seo title="Use Cases" />
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Use Cases
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          See who's using Singularity for a variety of cases and applications and how they are getting the best out of Singularity.
        </p>
      </div>
    </div>
    <div className="bg-gray-100 py-10">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              ALCF Research Benefits from Singularity
            </h2>
            <Link
                to="https://www.hpcwire.com/off-the-wire/alcf-research-benefits-from-singularity/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Scaling code for massively parallel architectures is a common challenge the scientific community faces. When moving from a system used for development—a personal laptop, for instance, or even a university’s computing cluster—to a large-scale supercomputer like those housed at the Argonne Leadership Computing Facility (ALCF), a U.S. Department of Energy (DOE) Office of Science User Facility, researchers traditionally would only migrate the target application: the underlying software stack would be left behind.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Performance Evaluation of Container-based Virtualization for High Performance Computing Environments
            </h2>
            <Link
                to="https://arxiv.org/abs/1709.10140"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Virtualization technologies have evolved along with the development of computational environments since virtualization offered needed features at that time such as isolation, accountability...
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Decoupling EDA Toolchains from the OS with Singularity Containers
            </h2>
            <Link
                to="https://insidehpc.com/2019/06/decoupling-eda-toolchains-from-the-os-with-singularity-containers/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Singularity containers introduce a compelling means for unlocking the implied dependency between application toolchains and operating system. By encapsulating everything but the kernel in a single file, Singularity containers decouple the runtime and allow it to be highly portable in a trusted way..
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              How Singularity Containers can ease the Transition to RHEL 8
            </h2>
            <Link
                to="https://insidehpc.com/2019/05/how-singularity-containers-can-ease-the-transition-to-rhel-8/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              The general availability of Red Hat Enterprise Linux 8 was announced this week at the Red Hat Summit in Boston. In this special guest feature, Ian Lumb writes that the company's Singularity containers can ease the transition to RHEL 8. "RHEL 8 is a transition over time, not a discrete event in time. Singularity containers preserve your heavily vested legacy deployments, while enabling you to make the transition on your terms."
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Argonne Looks to Singularity for HPC Code Portability
            </h2>
            <Link
                to="https://insidehpc.com/2019/02/argonne-looks-to-singularity-for-hpc-code-portability/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Over at Argonne, Nils Heinonen writes that Researchers are using the open source Singularity framework as a kind of Rosetta Stone for running supercomputing code almost anywhere. "Once a containerized workflow is defined, its image can be snapshotted, archived, and preserved for future use. The snapshot itself represents a boon for scientific provenance by detailing the exact conditions under which given data were generated: in theory, by providing the machine, the software stack, and the parameters, one’s work can be completely reproduced."
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Singularity Scientific containers for mobility of compute
            </h2>
            <Link
                to="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0177459"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Here we present Singularity, software developed to bring containers and reproducibility to scientific computing. Using Singularity containers, developers can work in reproducible environments of their choosing and design, and these complete environments can easily be copied and executed on other platforms. Singularity is an open source initiative that harnesses the expertise of system and software engineers and researchers alike, and integrates seamlessly into common workflows for both of these groups. As its primary use case, Singularity brings mobility of computing to both users and HPC centers, providing a secure means to capture and distribute software and compute environments. This ability to create and deploy reproducible environments across these centers, a previously unmet need, makes Singularity a game changing development for computational science.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 lg:w-20 lg:h-20">
          <svg
              className="w-10 h-10 text-blue-900 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
          >
            <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Toward Full Specialization of the HPC Software Stack
            </h2>
            <Link
                to="https://www.mcs.anl.gov/events/workshops/ross/2017/slides/ross2017-gerofi.pdf"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-700"
            >
              View Use Case
            </Link>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
              Diversity and complexity are all good requirement refinement enablers, mainly in what concerns software stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default UseCases
