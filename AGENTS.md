<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio presentation in a shared browser-safe component with separate home, projects, and archive leaf routes so navigation retains one consistent shell.
- Define the portfolio's visual styling in src/styles.css and interactive variants in the existing Button component so reference-specific styling remains centrally controlled.
- Use browser-safe CSS character reveals for secondary-page typography and CSS pill fills for navigation; honor reduced motion so transitions need no animation runtime and remain accessible.
