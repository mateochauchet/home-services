This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mobile Usage

### Add Capacitor Platforms

If this is your first time running the project on a native platform, add the Android and iOS platforms:

```bash
npx cap add android
npx cap add ios
```

### Sync Changes

Each time you make changes to your project, run the following command to sync the files with the native platforms:

```bash
npx cap sync
```

### Open in Android Studio or Xcode

To test the application on an emulator or device, open the project in Android Studio or Xcode:

#### Android:
```bash
npx cap open android
```

#### iOS:
```bash
npx cap open ios
```

From Android Studio or Xcode, you can build and run the application on an emulator or a real device.

### Build and Test on Physical Devices

To test on real devices, connect your device to your computer and use the build options in Android Studio or Xcode.