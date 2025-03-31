
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Briefcase, GraduationCap, Award, User, Laptop } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
          toast({
            title: "Profile picture updated",
            description: "Your profile picture has been successfully updated.",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto fade-in">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">Gabriel Marcelo</h1>
            <p className="text-gray-500 text-lg">IT Professional & Consultant</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="profile-image-container">
                {profileImage ? (
                  <img src={profileImage} alt="Gabriel Marcelo" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="h-32 w-32 text-gray-400" />
                  </div>
                )}
                <label className="profile-image-upload" htmlFor="profile-image">
                  <Camera className="h-5 w-5" />
                  <input 
                    type="file" 
                    id="profile-image" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <div className="mt-6 space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Education</h3>
                        <p className="text-sm text-gray-500">MSc in Computer Science</p>
                        <p className="text-sm text-gray-500">University of Technology</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Certifications</h3>
                        <p className="text-sm text-gray-500">Certified Information Systems Security Professional (CISSP)</p>
                        <p className="text-sm text-gray-500">CompTIA Network+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-600 mb-4">
                    With over 10 years of experience in the IT industry, I specialize in providing comprehensive IT solutions for businesses of all sizes. My expertise spans across network infrastructure, cybersecurity, cloud computing, and IT strategy.
                  </p>
                  <p className="text-gray-600 mb-4">
                    I am passionate about helping businesses leverage technology to improve their operations, enhance security, and drive growth. My approach is client-focused, ensuring that the solutions I provide are tailored to meet specific business needs and objectives.
                  </p>
                  <p className="text-gray-600">
                    Throughout my career, I have worked with clients across various industries, giving me a broad perspective on the diverse challenges businesses face in the digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Experience</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Senior IT Consultant</h3>
                          <p className="text-sm text-gray-500">TechSolutions Inc. | 2018 - Present</p>
                          <p className="mt-2 text-gray-600">
                            Lead IT consultant for enterprise clients, specializing in network architecture, cybersecurity implementation, and digital transformation initiatives.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Network Administrator</h3>
                          <p className="text-sm text-gray-500">Global Systems | 2013 - 2018</p>
                          <p className="mt-2 text-gray-600">
                            Managed network infrastructure for a mid-sized corporation, implemented security protocols, and provided technical support to over 200 employees.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">IT Support Specialist</h3>
                          <p className="text-sm text-gray-500">TechHelp Co. | 2010 - 2013</p>
                          <p className="mt-2 text-gray-600">
                            Provided technical support to clients, troubleshooted hardware and software issues, and assisted in network configuration for small businesses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Laptop className="h-5 w-5" />
              <span className="font-semibold">Gabriel Marcelo IT Services</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2023 Gabriel Marcelo IT Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
