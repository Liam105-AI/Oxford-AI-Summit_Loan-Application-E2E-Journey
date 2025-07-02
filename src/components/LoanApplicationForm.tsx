import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, DollarSign, FileText, User, Building } from 'lucide-react';

interface FormData {
  fullName: string;
  age: string;
  annualIncome: string;
  employmentType: string;
  employmentDuration: string;
  loanAmount: string;
  loanPurpose: string;
  monthlyIncome: string;
  monthlyDebtPayments: string;
  bankAccountAge: string;
  previousLoansCount: string;
  latePayments: string;
  creditScore: string;
}

interface FormErrors {
  [key: string]: string;
}

const LoanApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    annualIncome: '',
    employmentType: '',
    employmentDuration: '',
    loanAmount: '',
    loanPurpose: '',
    monthlyIncome: '',
    monthlyDebtPayments: '',
    bankAccountAge: '',
    previousLoansCount: '',
    latePayments: '',
    creditScore: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2 ? 'Please enter your full name' : '';
      case 'age':
        const age = parseInt(value);
        return age < 18 || age > 75 ? 'Age must be between 18 and 75' : '';
      case 'annualIncome':
        return parseFloat(value.replace(/[,$]/g, '')) <= 0 ? 'Please enter a valid income' : '';
      case 'monthlyIncome':
        return parseFloat(value.replace(/[,$]/g, '')) <= 0 ? 'Please enter a valid monthly income' : '';
      case 'loanAmount':
        return parseFloat(value.replace(/[,$]/g, '')) <= 0 ? 'Please enter a valid loan amount' : '';
      case 'employmentDuration':
        return parseFloat(value) < 0 ? 'Employment duration must be 0 or greater' : '';
      case 'bankAccountAge':
        return parseFloat(value) <= 0 ? 'Bank account age must be greater than 0' : '';
      case 'previousLoansCount':
        return parseFloat(value) < 0 ? 'Previous loans count must be 0 or greater' : '';
      case 'latePayments':
        return parseFloat(value) < 0 ? 'Late payments must be 0 or greater' : '';
      case 'creditScore':
        if (value) {
          const score = parseInt(value);
          return score < 300 || score > 850 ? 'Credit score must be between 300-850' : '';
        }
        return '';
      default:
        return value ? '' : 'This field is required';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const formatCurrency = (value: string): string => {
    const number = value.replace(/[^\d]/g, '');
    return number ? `$${parseInt(number).toLocaleString()}` : '';
  };

  const canProceedToNext = (): boolean => {
    const currentStepFields = getFieldsForStep(currentStep);
    return currentStepFields.every(field => 
      formData[field as keyof FormData] && 
      !errors[field]
    );
  };

  const getFieldsForStep = (step: number): string[] => {
    switch (step) {
      case 1: return ['fullName', 'age', 'annualIncome', 'employmentType', 'creditScore'];
      case 2: return ['loanAmount', 'loanPurpose'];
      case 3: return ['monthlyIncome', 'monthlyDebtPayments', 'employmentDuration', 'bankAccountAge', 'previousLoansCount', 'latePayments'];
      default: return [];
    }
  };

  const handleNext = () => {
    if (canProceedToNext() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateApplicationId = () => {
    const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `LOAN2024${randomNumber}`;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const applicationId = generateApplicationId();
      const webhookData = {
        applicationId,
        fullName: formData.fullName,
        age: parseInt(formData.age),
        annualIncome: formData.annualIncome,
        monthlyIncome: formData.monthlyIncome,
        employmentType: formData.employmentType,
        employmentDuration: parseInt(formData.employmentDuration),
        loanAmount: formData.loanAmount,
        loanPurpose: formData.loanPurpose,
        monthlyDebtPayments: formData.monthlyDebtPayments,
        bankAccountAge: parseInt(formData.bankAccountAge),
        previousLoansCount: parseInt(formData.previousLoansCount),
        latePayments: parseInt(formData.latePayments),
        creditScore: formData.creditScore ? parseInt(formData.creditScore) : null,
        submissionDate: new Date().toISOString()
      };

      const response = await fetch('https://hook.eu2.make.com/30lfttesd59nswamvznulhsmvdfgumyd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-subtle border-0 shadow-premium">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-4">
              Your Collaborative Journey Begins!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your application has been submitted! You'll receive updates at every step of our collaborative process.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-jade mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-jade rounded-full"></div>
                <span>Initial review within 24 hours with complete transparency</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-jade rounded-full"></div>
                <span>Collaborative discussion about your options and terms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-jade rounded-full"></div>
                <span>Final decision in 5-7 business days with full visibility</span>
              </div>
            </div>
          </div>
          <Button variant="premium" size="lg" onClick={() => window.location.reload()}>
            Start Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-subtle border-0 shadow-premium">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-primary">Your Collaborative Financial Experience</CardTitle>
        <CardDescription className="text-base">
          Step {currentStep} of {totalSteps} - Building your personalized lending partnership
        </CardDescription>
        <div className="mt-4">
          <Progress value={progressPercentage} className="h-3" />
        </div>
      </CardHeader>

      <CardContent className="p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Personal Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`mt-1 ${errors.fullName ? 'border-destructive' : ''}`}
                  placeholder="Enter your full legal name"
                />
                {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="age" className="text-sm font-medium text-foreground">Age</Label>
                <Input
                  id="age"
                  type="number"
                  min="18"
                  max="75"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={`mt-1 ${errors.age ? 'border-destructive' : ''}`}
                  placeholder="Your age"
                />
                {errors.age && <p className="text-sm text-destructive mt-1">{errors.age}</p>}
              </div>

              <div>
                <Label htmlFor="annualIncome" className="text-sm font-medium text-foreground">Annual Income</Label>
                <Input
                  id="annualIncome"
                  value={formData.annualIncome}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    handleInputChange('annualIncome', formatted);
                  }}
                  className={`mt-1 ${errors.annualIncome ? 'border-destructive' : ''}`}
                  placeholder="$75,000"
                />
                {errors.annualIncome && <p className="text-sm text-destructive mt-1">{errors.annualIncome}</p>}
              </div>

              <div>
                <Label htmlFor="employmentType" className="text-sm font-medium text-foreground">Employment Type</Label>
                <Select value={formData.employmentType} onValueChange={(value) => handleInputChange('employmentType', value)}>
                  <SelectTrigger className={`mt-1 ${errors.employmentType ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Self-employed">Self-employed</SelectItem>
                    <SelectItem value="Unemployed">Unemployed</SelectItem>
                    <SelectItem value="Retired">Retired</SelectItem>
                  </SelectContent>
                </Select>
                {errors.employmentType && <p className="text-sm text-destructive mt-1">{errors.employmentType}</p>}
              </div>

              <div>
                <Label htmlFor="creditScore" className="text-sm font-medium text-foreground">Credit Score (Optional - We'll verify this)</Label>
                <Input
                  id="creditScore"
                  type="number"
                  min="300"
                  max="850"
                  value={formData.creditScore}
                  onChange={(e) => handleInputChange('creditScore', e.target.value)}
                  className={`mt-1 ${errors.creditScore ? 'border-destructive' : ''}`}
                  placeholder="750"
                />
                {errors.creditScore && <p className="text-sm text-destructive mt-1">{errors.creditScore}</p>}
                <p className="text-sm text-muted-foreground mt-1">Don't worry - we'll verify this during our transparent process</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Loan Details</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="loanAmount" className="text-sm font-medium text-foreground">Loan Amount Requested</Label>
                <Input
                  id="loanAmount"
                  value={formData.loanAmount}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    handleInputChange('loanAmount', formatted);
                  }}
                  className={`mt-1 ${errors.loanAmount ? 'border-destructive' : ''}`}
                  placeholder="$250,000"
                />
                {errors.loanAmount && <p className="text-sm text-destructive mt-1">{errors.loanAmount}</p>}
              </div>

              <div>
                <Label htmlFor="loanPurpose" className="text-sm font-medium text-foreground">Loan Purpose</Label>
                <Select value={formData.loanPurpose} onValueChange={(value) => handleInputChange('loanPurpose', value)}>
                  <SelectTrigger className={`mt-1 ${errors.loanPurpose ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select loan purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Home Purchase">Home Purchase</SelectItem>
                    <SelectItem value="Refinance">Refinance</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Investment Property">Investment Property</SelectItem>
                  </SelectContent>
                </Select>
                {errors.loanPurpose && <p className="text-sm text-destructive mt-1">{errors.loanPurpose}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Financial Assessment</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthlyIncome" className="text-sm font-medium text-foreground">Monthly Income</Label>
                <Input
                  id="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    handleInputChange('monthlyIncome', formatted);
                  }}
                  className={`mt-1 ${errors.monthlyIncome ? 'border-destructive' : ''}`}
                  placeholder="$6,250"
                />
                {errors.monthlyIncome && <p className="text-sm text-destructive mt-1">{errors.monthlyIncome}</p>}
              </div>

              <div>
                <Label htmlFor="monthlyDebtPayments" className="text-sm font-medium text-foreground">Existing Monthly Debt</Label>
                <Input
                  id="monthlyDebtPayments"
                  value={formData.monthlyDebtPayments}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    handleInputChange('monthlyDebtPayments', formatted);
                  }}
                  className={`mt-1 ${errors.monthlyDebtPayments ? 'border-destructive' : ''}`}
                  placeholder="$1,500"
                />
                {errors.monthlyDebtPayments && <p className="text-sm text-destructive mt-1">{errors.monthlyDebtPayments}</p>}
              </div>

              <div>
                <Label htmlFor="employmentDuration" className="text-sm font-medium text-foreground">Employment Duration (months)</Label>
                <Input
                  id="employmentDuration"
                  type="number"
                  min="0"
                  value={formData.employmentDuration}
                  onChange={(e) => handleInputChange('employmentDuration', e.target.value)}
                  className={`mt-1 ${errors.employmentDuration ? 'border-destructive' : ''}`}
                  placeholder="36"
                />
                {errors.employmentDuration && <p className="text-sm text-destructive mt-1">{errors.employmentDuration}</p>}
              </div>

              <div>
                <Label htmlFor="bankAccountAge" className="text-sm font-medium text-foreground">Bank Account Age (months)</Label>
                <Input
                  id="bankAccountAge"
                  type="number"
                  min="1"
                  value={formData.bankAccountAge}
                  onChange={(e) => handleInputChange('bankAccountAge', e.target.value)}
                  className={`mt-1 ${errors.bankAccountAge ? 'border-destructive' : ''}`}
                  placeholder="48"
                />
                {errors.bankAccountAge && <p className="text-sm text-destructive mt-1">{errors.bankAccountAge}</p>}
              </div>

              <div>
                <Label htmlFor="previousLoansCount" className="text-sm font-medium text-foreground">Previous Loans Count</Label>
                <Input
                  id="previousLoansCount"
                  type="number"
                  min="0"
                  value={formData.previousLoansCount}
                  onChange={(e) => handleInputChange('previousLoansCount', e.target.value)}
                  className={`mt-1 ${errors.previousLoansCount ? 'border-destructive' : ''}`}
                  placeholder="2"
                />
                {errors.previousLoansCount && <p className="text-sm text-destructive mt-1">{errors.previousLoansCount}</p>}
              </div>

              <div>
                <Label htmlFor="latePayments" className="text-sm font-medium text-foreground">Late Payments in Last 12 Months</Label>
                <Input
                  id="latePayments"
                  type="number"
                  min="0"
                  value={formData.latePayments}
                  onChange={(e) => handleInputChange('latePayments', e.target.value)}
                  className={`mt-1 ${errors.latePayments ? 'border-destructive' : ''}`}
                  placeholder="0"
                />
                {errors.latePayments && <p className="text-sm text-destructive mt-1">{errors.latePayments}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={currentStep === 1 ? 'invisible' : ''}
          >
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              variant="premium"
              onClick={handleNext}
              disabled={!canProceedToNext()}
            >
              Continue Partnership
            </Button>
          ) : (
            <Button
              variant="hero"
              size="lg"
              onClick={handleSubmit}
              disabled={!canProceedToNext() || isSubmitting}
            >
              {isSubmitting ? 'Creating your collaborative experience...' : 'Begin Our Partnership'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanApplicationForm;